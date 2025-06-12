import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as string[],
  }),
  actions: {
    setFavorites(newFavorites: string[]) {
      this.favorites = [...newFavorites]
    },
    toggleFavorite(name: string) {
      const index = this.favorites.indexOf(name)
      if (index >= 0) {
        this.favorites.splice(index, 1)
      } else {
        this.favorites.push(name)
      }
    },
  },
})
