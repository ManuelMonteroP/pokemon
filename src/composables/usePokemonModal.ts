import { ref } from 'vue'
import { PokemonService } from '@/services/pokemonService'
import type { PokemonDetail } from '@/types/Pokemon'
import type { ToastType } from '@/composables/useToast'

export function usePokemonModal(
  notify: (text: string, type?: ToastType, duration?: number) => void,
) {
  const selectedPokemon = ref<PokemonDetail | null>(null)
  const showModal = ref(false)
  const pokemonService = new PokemonService()

  const openPokemon = async (name: string) => {
    try {
      const data = await pokemonService.getPokemonByName(name)
      selectedPokemon.value = data
      showModal.value = true
    } catch (err) {
      notify(`Error loading Pokémon: ${err}`, 'error')
    }
  }

  return {
    selectedPokemon,
    showModal,
    openPokemon,
  }
}
