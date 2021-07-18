
type optionId = "cost" 
| "crew"
| "hyperdriveRating"
| "length"
| "maxAtmospheringSpeed"
| "passengers"
| "cargoCapacity"

export interface Option {
  text: string
  id: optionId
}

export interface Starship {
  id: string
  name: string
  model: string
  cost: number
  crew: number
  hyperdriveRating: number
  length: number
  maxAtmospheringSpeed: number
  cargoCapacity: number
  passengers: number
  manufacturer: string
}

export type CompareResults<S> = S[][]

export type StarshipList<S> = {
  [key: string]: S
}

export type Store = {
  options: Option[]
  config: Option | null
  search: string
  starships: StarshipList<Starship>
  compareResults: CompareResults<Starship>
  availableStarships: StarshipList<Starship>
}

export interface Data extends Store {
  loading: boolean
  setConfig: (id: string | null) => void
  setSearch: (value: string) => void 
  addStarship: (starship: Starship) => void
  removeStarship: (id: string) => void
  compare: () => void
  clearCompareResults: () => void
}

export type Action = {type: "ADD_STARSHIP", starship: Starship}
| { type: "REMOVE_STARSHIP", id: string }
| { type: "CLEAR_STARSHIPS" }
| { type: "SET_CONFIG", config: Option | null }
| { type: "SET_COMPARE_RESULTS", compareResults: CompareResults<Starship>}
| { type: "CLEAR_COMPARE_RESULTS" }
| { type: "SET_AVAILABLE_STARSHIPS", availableStarships: StarshipList<Starship>}
| { type: "CLEAR_AVAILABLE_STARSHIPS" }
| { type: "SET_SEARCH", search: string }
