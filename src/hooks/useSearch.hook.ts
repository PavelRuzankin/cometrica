import { useState } from "react"
import { Response } from "./types"

const useSearch = () => {

  const [ loading, setLoading ] = useState(false)

  const loadStarships = async (search: string): Promise<Response | undefined> => {
    try {
      setLoading(true)

      const response = await fetch(`https://swapi.dev/api/starships/?search=${search}`)
      const data: Response = await response.json()
      setLoading(false)

      return data

    } catch (error) {

      setLoading(false)
      throw new Error
    }
  }

  return { loading, loadStarships }
}

export default useSearch