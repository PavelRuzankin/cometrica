export interface ResponseStarship {
  name: string
  model: string
  cost_in_credits: string
  manufacturer: string
  crew: string
  hyperdrive_rating: string
  length: string
  max_atmosphering_speed: string
  passengers: string
  url: string
  cargo_capacity: string
}

export interface Response {
  results: ResponseStarship[]
}