import { computed, type Ref } from 'vue'
import type { BasicPokemon } from '@/types/Pokemon'

export function useFilteredPokemons(
  pokemons: Ref<BasicPokemon[]>,
  favorites: Ref<string[]>,
  search: Ref<string>,
  selectedTab: Ref<'all' | 'favorites'>,
) {
  const filteredPokemons = computed(() => {
    const query = search.value.toLowerCase()
    const list =
      selectedTab.value === 'favorites'
        ? pokemons.value.filter((p) => favorites.value.includes(p.name))
        : pokemons.value

    return list.filter((p) => p.name.toLowerCase().includes(query))
  })

  return { filteredPokemons }
}
