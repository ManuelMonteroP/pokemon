import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { PokemonDetail } from '@/types/Pokemon'
import { copyPokemonToClipboard } from '@/utils/share'

import { useToast } from '@/composables/useToast'
import { usePokemonPagination } from '@/composables/usePokemonPagination'
import { useSearchPokemon } from '@/composables/useSearchPokemon'
import { usePokemonModal } from '@/composables/usePokemonModal'
import { useFavorites } from '@/composables/useFavorites'
import { useFilteredPokemons } from '@/composables/usePokemonsFiltered'

export function useHomeView() {
  const loading = ref(true)
  const search = ref<string>('')
  const selectedTab = ref<'all' | 'favorites'>('all')
  const router = useRouter()

  const notify = useToast()
  const { pokemons, loadMorePokemons } = usePokemonPagination(notify)
  const { selectedPokemon, showModal, openPokemon } = usePokemonModal(notify)
  const { favorites, toggleFavorite } = useFavorites()
  const { filteredPokemons } = useFilteredPokemons(pokemons, favorites, search, selectedTab)

  useSearchPokemon(pokemons, search, notify)

  onMounted(async () => {
    try {
      await loadMorePokemons()
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (err) {
      notify(`Error on initial load: ${err}`, 'error')
    } finally {
      loading.value = false
    }
  })

  const handleShare = (pokemon: PokemonDetail) => {
    copyPokemonToClipboard(pokemon)
    notify('the data is copied to the clipboard', 'info')
  }

  const goToWelcome = () => {
    router.push('/')
  }

  return {
    pokemons,
    favorites,
    loading,
    search,
    selectedTab,
    selectedPokemon,
    showModal,
    filteredPokemons,
    handleShare,
    openPokemon,
    toggleFavorite,
    goToWelcome,
    loadMorePokemons,
  }
}
