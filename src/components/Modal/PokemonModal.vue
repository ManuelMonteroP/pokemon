<template>
  <teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-card">
        <PokemonModalHeader :pokemon="pokemon" @close="$emit('close')" />
        <PokemonModalBody :pokemon="pokemon" />
        <PokemonModalFooter :pokemon="pokemon" :isFavorite="isFavorite" @share="$emit('share', pokemon)"
          @toggleFavorite="$emit('toggleFavorite', pokemon.name)" />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import type { PokemonDetail } from '@/types/Pokemon'

import './PokemonModal.css'
import PokemonModalHeader from './ModalHeader/PokemonModalHeader.vue'
import PokemonModalBody from './ModalBody/PokemonModalBody.vue'
import PokemonModalFooter from './ModalFooter/PokemonModalFooter.vue'

defineProps<{
  pokemon: PokemonDetail
  isFavorite: boolean
}>()

defineEmits<{
  (e: 'close'): void
  (e: 'share', p: PokemonDetail): void
  (e: 'toggleFavorite', name: string): void
}>()
</script>
