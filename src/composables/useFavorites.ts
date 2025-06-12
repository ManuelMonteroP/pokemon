import { ref } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

export function useFavorites() {
  const favoritesStore = useFavoritesStore()
  const favorites = ref<string[]>([...favoritesStore.favorites])

  const toggleFavorite = (name: string) => {
    const index = favorites.value.indexOf(name)
    if (index >= 0) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(name)
    }
    favoritesStore.setFavorites(favorites.value)
  }

  return {
    favorites,
    toggleFavorite,
  }
}
