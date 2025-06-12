export interface BasicPokemon {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

export interface PokemonDetail {
  abilities: Ability[]
  name: string
  height: number
  weight: number
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

export interface Ability {
  ability: Species | null
  is_hidden: boolean
  slot: number
}

export interface Species {
  name: string
  url: string
}
