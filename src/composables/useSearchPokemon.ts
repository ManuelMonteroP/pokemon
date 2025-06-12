import { ref, watch, type Ref } from 'vue'
import { PokemonService } from '@/services/pokemonService'
import { debounce } from '@/utils/debounce'
import type { BasicPokemon } from '@/types/Pokemon'
import type { ToastType } from '@/composables/useToast'

export function useSearchPokemon(
  pokemons: Ref<BasicPokemon[]>,
  search: Ref<string>,
  notify: (text: string, type?: ToastType, duration?: number) => void,
) {
  const alreadyTriedToFetch = ref<string | null>(null)
  const pokemonService = new PokemonService()

  const fetchPokemonByName = async (query: string) => {
    if (!query || alreadyTriedToFetch.value === query) return

    const hasResults = pokemons.value.some((p) => p.name.toLowerCase().includes(query))

    if (hasResults) return

    try {
      const result = await pokemonService.getPokemonByName(query)
      pokemons.value.push({
        name: result.name,
        url: `https://pokeapi.co/api/v2/pokemon/${result.name}/`,
      })
    } catch {
      notify(`Error: Pokemon no found ${query}`, 'error')
    } finally {
      alreadyTriedToFetch.value = query
    }
  }

  watch(
    search,
    debounce((value: unknown) => {
      if (typeof value === 'string') {
        fetchPokemonByName(value.trim().toLowerCase())
      }
    }, 500),
  )
}
