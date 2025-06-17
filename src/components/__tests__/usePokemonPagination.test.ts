import { describe, it, expect, vi, beforeEach } from 'vitest'
import { usePokemonPagination } from '@/composables/usePokemonPagination'
import { flushPromises } from '@vue/test-utils'
import type { BasicPokemon } from '@/types/Pokemon'
import type { MockInstance } from 'vitest'
import { PokemonService } from '@/services/pokemonService'

vi.mock('@/services/pokemonService', () => {
  return {
    PokemonService: vi.fn(),
  }
})

describe('usePokemonPagination', () => {
  const mockNotify = vi.fn()

  const mockPokemonList: BasicPokemon[] = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  function setupMockService(getPokemonsFn: () => Promise<BasicPokemon[]>) {
    ;(PokemonService as unknown as MockInstance).mockImplementation(() => ({
      getPokemons: getPokemonsFn,
    }))
  }

  it('should fetch and append pokemons on loadMorePokemons', async () => {
    const getPokemonsMock = vi.fn().mockResolvedValue(mockPokemonList)
    setupMockService(getPokemonsMock)

    const { pokemons, loadMorePokemons, isFetchingMore } = usePokemonPagination()

    await loadMorePokemons()
    await flushPromises()

    expect(getPokemonsMock).toHaveBeenCalledWith(20, 0)
    expect(pokemons.value).toEqual(mockPokemonList)
    expect(isFetchingMore.value).toBe(false)
  })

  it('should prevent multiple calls when already fetching', async () => {
    const getPokemonsMock = vi.fn().mockResolvedValue(mockPokemonList)
    setupMockService(getPokemonsMock)

    const { loadMorePokemons, isFetchingMore } = usePokemonPagination()

    isFetchingMore.value = true
    await loadMorePokemons()

    expect(getPokemonsMock).not.toHaveBeenCalled()
  })

  it('should notify on loading more if offset > 0', async () => {
    const getPokemonsMock = vi.fn().mockResolvedValue(mockPokemonList)
    setupMockService(getPokemonsMock)

    const { loadMorePokemons } = usePokemonPagination(mockNotify)

    await loadMorePokemons()
    await flushPromises()

    await loadMorePokemons()
    await flushPromises()

    expect(mockNotify).toHaveBeenCalledWith('Loading more Pokémon...', 'info')
  })

  it('should notify on error when fetch fails', async () => {
    const error = new Error('Network fail')
    const getPokemonsMock = vi.fn().mockRejectedValue(error)
    setupMockService(getPokemonsMock)

    const { loadMorePokemons } = usePokemonPagination(mockNotify)

    await loadMorePokemons()
    await flushPromises()

    expect(mockNotify).toHaveBeenCalledWith(`Error fetching more Pokémon: ${error}`, 'error')
  })
})
