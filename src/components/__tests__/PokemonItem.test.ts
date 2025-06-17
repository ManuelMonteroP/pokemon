import { mount } from '@vue/test-utils'
import PokemonItem from '@/components/List/Items/PokemonItem.vue'
import { describe, expect, it } from 'vitest'

describe('PokemonItem', () => {
  const mockPokemon = {
    name: 'pikachu',
    image: 'https://example.com/pikachu.png',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
  }

  it('renderiza nombre y botón de favorito correctamente', () => {
    const wrapper = mount(PokemonItem, {
      props: {
        pokemon: mockPokemon,
        isFavorite: false,
      },
    })

    expect(wrapper.text().toLowerCase()).toContain('pikachu')

    const favoriteButton = wrapper.find('.star-btn')
    expect(favoriteButton.exists()).toBe(true)
  })

  it('emite evento select al hacer clic en el item', async () => {
    const wrapper = mount(PokemonItem, {
      props: {
        pokemon: mockPokemon,
        isFavorite: false,
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('select')
    expect(wrapper.emitted('select')![0]).toEqual(['pikachu'])
  })

  it('emite toggleFavorite al hacer clic en el botón de favorito', async () => {
    const wrapper = mount(PokemonItem, {
      props: {
        pokemon: mockPokemon,
        isFavorite: false,
      },
    })

    const favoriteButton = wrapper.find('.star-btn')
    await favoriteButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('toggleFavorite')
    expect(wrapper.emitted('toggleFavorite')![0]).toEqual(['pikachu'])
  })
})
