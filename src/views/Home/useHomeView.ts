// src/views/Home/useHomeView.ts
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { PokemonService } from '@/services/pokemonService'
import type { BasicPokemon, PokemonDetail } from '@/types/Pokemon'

export function useHomeView() {
  const pokemons = ref<BasicPokemon[]>([])
  const favorites = ref<string[]>([])
  const loading = ref(true)
  const search = ref('')
  const selectedTab = ref<'all' | 'favorites'>('all')
  const selectedPokemon = ref<PokemonDetail | null>(null)
  const showModal = ref(false)
  const router = useRouter()
  const pokemonService = new PokemonService()

  const offset = ref(0)
  const limit = 20
  const isFetchingMore = ref(false)

  const filteredPokemons = computed(() => {
    const query = search.value.toLowerCase()
    const list =
      selectedTab.value === 'favorites'
        ? pokemons.value.filter((p) => favorites.value.includes(p.name))
        : pokemons.value

    return list.filter((p) => p.name.toLowerCase().includes(query))
  })

  onMounted(async () => {
    try {
      await loadMorePokemons()
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (err) {
      console.error('Error on initial load:', err)
    } finally {
      loading.value = false
    }
  })

  const handleShare = (pokemon: PokemonDetail) => {
    const data = `Name: ${pokemon.name}, Types: ${pokemon.types
      .map((t) => t.type.name)
      .join(', ')}, Abilities: ${pokemon.abilities
      .map((a) => a.ability?.name)
      .filter(Boolean)
      .join(', ')}`
    navigator.clipboard.writeText(data)
    alert('Pokémon copied to clipboard!')
  }

  const openPokemon = async (name: string) => {
    try {
      const data = await pokemonService.getPokemonByName(name)
      selectedPokemon.value = data
      showModal.value = true
    } catch (err) {
      console.error('Error loading Pokémon:', err)
    }
  }

  const toggleFavorite = (name: string) => {
    const index = favorites.value.indexOf(name)
    if (index >= 0) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(name)
    }
  }

  const goToWelcome = () => {
    router.push('/')
  }

  const loadMorePokemons = async () => {
    if (isFetchingMore.value) return
    isFetchingMore.value = true
    try {
      const list = await pokemonService.getPokemons(limit, offset.value)
      pokemons.value.push(...list)
      offset.value += limit
    } catch (err) {
      console.error('Error fetching more Pokémon:', err)
    } finally {
      isFetchingMore.value = false
    }
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
