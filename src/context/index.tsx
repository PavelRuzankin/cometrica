import React, { createContext, useCallback, useContext, useReducer } from 'react'

import useSearch from '../hooks/useSearch.hook'
import useUpdate from "../hooks/useUpdate.hook"

import * as ACTION_TYPES from './actionTypes' 

import { Starship, Store, Data, Action, StarshipList, CompareResults } from './types'
import _ from 'lodash'
import parseNumber from '../utils/parseNumber'

const initialStore: Store = {
  options: [
    {
      text: "Длинна",
      id: "length"
    },
    {
      text: "Грузовая вместимость",
      id: "cargoCapacity"
    },
    {
      text: "Стоимость в кредитах",
      id: "cost"
    },
    {
      text: "Экипаж",
      id: "crew"
    },
    {
      text: "Рейтинг гипердвигателя",
      id: "hyperdriveRating"
    },
    {
      text: "Максимальная скорость в атмосфере",
      id: "maxAtmospheringSpeed"
    },
    {
      text: "Пассажиры",
      id: "passengers"
    }
  ],
  config: null,
  starships: {},
  availableStarships: {},
  compareResults: [],
  search: "",
}

interface ContextProps {
  children: React.ReactElement
}

let DataContext = createContext<Data | null>(null)

const reducer = (store: Store, action: Action): Store => {
  switch(action.type) {
    case ACTION_TYPES.ADD_STARSHIP:
      const newStarships = {...store.starships, [action.starship.id]: action.starship}
      return {...store, starships: newStarships}

    case ACTION_TYPES.REMOVE_STARSHIP:

      const removingStarships = store.starships
      delete removingStarships[action.id]
      return {...store, starships: removingStarships}

    case ACTION_TYPES.CLEAR_STARSHIPS:
      return { ...store, starships: {} }
    case ACTION_TYPES.SET_AVAILABLE_STARSHIPS:
      return {...store, availableStarships: action.availableStarships}
    case ACTION_TYPES.CLEAR_AVAILABLE_STARSHIPS:
      return {...store, availableStarships: {}}
    case ACTION_TYPES.SET_CONFIG: 
      return {...store, config: action.config}
    case ACTION_TYPES.SET_SEARCH: 
      return {...store, search: action.search}
    case ACTION_TYPES.SET_COMPARE_RESULTS:
      return {...store, compareResults: action.compareResults}
    case ACTION_TYPES.CLEAR_COMPARE_RESULTS:
      return {...store, compareResults: []}
    default: 
    return store
  }
}

export const DataProvider: React.FC<ContextProps> = (props): React.ReactElement => {

  const [ store, dispatch] = useReducer(reducer, initialStore)

  const { loading, loadStarships } = useSearch()

  const setSearch = (search: string) => dispatch({type: ACTION_TYPES.SET_SEARCH, search})
  const addStarship = (starship: Starship) => dispatch({type: ACTION_TYPES.ADD_STARSHIP, starship})
  const removeStarship = (id: string) => dispatch({type: ACTION_TYPES.REMOVE_STARSHIP, id})
  const clearAvailableStarships = () => dispatch({type: ACTION_TYPES.CLEAR_AVAILABLE_STARSHIPS})
  const setCompareResults = (compareResults: CompareResults<Starship>) => dispatch({type: ACTION_TYPES.SET_COMPARE_RESULTS, compareResults})
  const clearCompareResults = () => dispatch({type: ACTION_TYPES.CLEAR_COMPARE_RESULTS})

  const setConfig = (id: string | null) => {
    if(id){
      const config = store.options.find(option => option.id === id)
      config && dispatch({type: ACTION_TYPES.SET_CONFIG, config})
    }else {
      dispatch({type: ACTION_TYPES.SET_CONFIG, config: null})
    }
  } 

  const setAvailableStarships = useCallback(_.debounce(async (search: string) => {
    try {
      const data = await loadStarships(search)

      const availableStarships: StarshipList<Starship> = {}
      
      data?.results.forEach(result => {

        const urlArray = result.url.split("/")
        const id = urlArray[urlArray.length - 2]
        
        if(id){
          availableStarships[id] = {
            id,
            name: result.name,
            model: result.model,
            cost: parseNumber(result.cost_in_credits),
            crew: parseNumber(result.crew),
            hyperdriveRating: parseNumber(result.hyperdrive_rating),
            length: parseNumber(result.length),
            maxAtmospheringSpeed: parseNumber(result.max_atmosphering_speed),
            passengers: parseNumber(result.passengers),
            manufacturer: result.manufacturer,
            cargoCapacity: parseNumber(result.cargo_capacity)
          }
        }
      })

      availableStarships 
        ? dispatch({type: ACTION_TYPES.SET_AVAILABLE_STARSHIPS, availableStarships})
        : dispatch({type: ACTION_TYPES.CLEAR_AVAILABLE_STARSHIPS})

    } catch {
      dispatch({type: ACTION_TYPES.CLEAR_AVAILABLE_STARSHIPS})
    }
  }, 300), [])


  const compare = () => {

    if(!store.config || _.isEmpty(store.starships)){
      return
    }

    const compareKey = store.config.id
    const starships = { ...store.starships } 

    let compareResults: CompareResults<Starship> = []

    _.forEach(starships, starship => {

      const value = starship[compareKey]

      const rowIndex = compareResults.findIndex(row => (
        row.some(comparedStarship => comparedStarship[compareKey] === value)
      ))

      rowIndex > -1
        ? compareResults[rowIndex].push(starship)
        : compareResults.push([starship])
    })

    compareResults = _.sortBy(compareResults, row => row[0][compareKey]).reverse()
    
    setCompareResults(compareResults)
  }

  useUpdate(() => {
    store.search 
      ? setAvailableStarships(store.search)
      : clearAvailableStarships()
  }, [store.search])

  return (
    <DataContext.Provider value={{
      ...store, loading,
      setConfig, setSearch, addStarship,
      removeStarship,
      clearCompareResults,
      compare
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export const useData = (): Data => useContext(DataContext) as Data