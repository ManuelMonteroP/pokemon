import { ref } from 'vue'
import type { BasicPokemon } from '@/types/Pokemon'
import { PokemonService } from '@/services/pokemonService'

export function usePokemonPagination(notify?: (msg: string, type?: 'info' | 'error') => void) {
  const pokemons = ref<BasicPokemon[]>([])
  const offset = ref(0)
  const limit = 20
  const isFetchingMore = ref(false)

  const pokemonService = new PokemonService()

  const loadMorePokemons = async () => {
    if (isFetchingMore.value) return
    isFetchingMore.value = true
    try {
      if (offset.value > 0 && notify) {
        notify('Loading more Pokémon...', 'info')
      }
      const list = await pokemonService.getPokemons(limit, offset.value)
      pokemons.value.push(...list)
      offset.value += limit
    } catch (err) {
      if (notify) {
        notify(`Error fetching more Pokémon: ${err}`, 'error')
      }
    } finally {
      isFetchingMore.value = false
    }
  }

  return {
    pokemons,
    loadMorePokemons,
    isFetchingMore,
  }
}
