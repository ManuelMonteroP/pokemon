import { usePokemonModal } from '@/composables/usePokemonModal'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import type { PokemonDetail } from '@/types/Pokemon'

vi.mock('@/services/pokemonService', () => {
  return {
    PokemonService: vi.fn().mockImplementation(() => ({
      getPokemonByName: vi.fn(),
    })),
  }
})

import { PokemonService } from '@/services/pokemonService'

describe('usePokemonModal', () => {
  const mockNotify = vi.fn()
  const mockPokemon: PokemonDetail = {
    name: 'pikachu',
    height: 4,
    weight: 60,
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://img.pokemondb.net/sprites/pikachu.png',
        },
      },
    },
    types: [],
    abilities: [],
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch and set selectedPokemon when openPokemon is called', async () => {
    const mockGetPokemonByName = vi.fn().mockResolvedValue(mockPokemon)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(PokemonService as any).mockImplementation(() => ({
      getPokemonByName: mockGetPokemonByName,
    }))

    const { selectedPokemon, showModal, openPokemon } = usePokemonModal(mockNotify)

    await openPokemon('pikachu')
    await flushPromises()

    expect(mockGetPokemonByName).toHaveBeenCalledWith('pikachu')
    expect(selectedPokemon.value).toEqual(mockPokemon)
    expect(showModal.value).toBe(true)
    expect(mockNotify).not.toHaveBeenCalled()
  })

  it('should call notify if getPokemonByName fails', async () => {
    const mockError = new Error('Network error')
    const mockGetPokemonByName = vi.fn().mockRejectedValue(mockError)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(PokemonService as any).mockImplementation(() => ({
      getPokemonByName: mockGetPokemonByName,
    }))

    const { selectedPokemon, showModal, openPokemon } = usePokemonModal(mockNotify)

    await openPokemon('missingno')
    await flushPromises()

    expect(mockGetPokemonByName).toHaveBeenCalledWith('missingno')
    expect(selectedPokemon.value).toBeNull()
    expect(showModal.value).toBe(false)
    expect(mockNotify).toHaveBeenCalledWith(`Error loading Pokémon: ${mockError}`, 'error')
  })
})
