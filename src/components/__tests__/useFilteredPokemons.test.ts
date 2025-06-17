import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { useFilteredPokemons } from '@/composables/usePokemonsFiltered'
import type { BasicPokemon } from '@/types/Pokemon'

describe('useFilteredPokemons', () => {
  const samplePokemons: BasicPokemon[] = [
    { name: 'bulbasaur', url: 'url-1' },
    { name: 'charmander', url: 'url-2' },
    { name: 'squirtle', url: 'url-3' },
  ]

  it('should return all pokemons when selectedTab is "all" and no search', () => {
    const pokemons = ref(samplePokemons)
    const favorites = ref<string[]>([])
    const search = ref('')
    const selectedTab = ref<'all' | 'favorites'>('all')

    const { filteredPokemons } = useFilteredPokemons(pokemons, favorites, search, selectedTab)

    expect(filteredPokemons.value).toEqual(samplePokemons)
  })

  it('should return only favorites when selectedTab is "favorites"', () => {
    const pokemons = ref(samplePokemons)
    const favorites = ref(['charmander'])
    const search = ref('')
    const selectedTab = ref<'all' | 'favorites'>('favorites')

    const { filteredPokemons } = useFilteredPokemons(pokemons, favorites, search, selectedTab)

    expect(filteredPokemons.value).toEqual([{ name: 'charmander', url: 'url-2' }])
  })

  it('should filter by search', () => {
    const pokemons = ref(samplePokemons)
    const favorites = ref<string[]>([])
    const search = ref('SQUI')
    const selectedTab = ref<'all' | 'favorites'>('all')

    const { filteredPokemons } = useFilteredPokemons(pokemons, favorites, search, selectedTab)

    expect(filteredPokemons.value).toEqual([{ name: 'squirtle', url: 'url-3' }])
  })

  it('should apply search filter within favorites when tab is "favorites"', () => {
    const pokemons = ref(samplePokemons)
    const favorites = ref(['charmander', 'squirtle'])
    const search = ref('squ')
    const selectedTab = ref<'all' | 'favorites'>('favorites')

    const { filteredPokemons } = useFilteredPokemons(pokemons, favorites, search, selectedTab)

    expect(filteredPokemons.value).toEqual([{ name: 'squirtle', url: 'url-3' }])
  })

  it('should return empty if no favorites match', () => {
    const pokemons = ref(samplePokemons)
    const favorites = ref(['pikachu'])
    const search = ref('')
    const selectedTab = ref<'all' | 'favorites'>('favorites')

    const { filteredPokemons } = useFilteredPokemons(pokemons, favorites, search, selectedTab)

    expect(filteredPokemons.value).toEqual([])
  })
})
