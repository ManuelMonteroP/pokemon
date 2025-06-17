import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useFavorites } from '@/composables/useFavorites'

describe('useFavorites', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add a favorite', () => {
    const { favorites, toggleFavorite } = useFavorites()

    expect(favorites.value).toEqual([])
    toggleFavorite('pikachu')
    expect(favorites.value).toContain('pikachu')
  })
})
