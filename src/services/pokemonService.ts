import { HttpClient } from './httpClient'
import type { PokemonListResponse, PokemonDetail, BasicPokemon } from '@/types/Pokemon'

const baseUrl = import.meta.env.VITE_API_BASE_URL
if (!baseUrl) throw new Error('Missing VITE_API_BASE_URL in .env')

const http = new HttpClient(baseUrl)

export class PokemonService {
  async getPokemons(limit = 20, offset = 0): Promise<BasicPokemon[]> {
    const data = await http.get<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`)
    return data.results
  }

  async getPokemonByName(name: string): Promise<PokemonDetail> {
    return http.get<PokemonDetail>(`/pokemon/${name}`)
  }
}
