<template>
  <div class="pokemon-item" @click="$emit('select', pokemon.name)">
    <span class="pokemon-name">{{ capitalize(pokemon.name) }}</span>
    <BaseFavoriteButton :is-active="isFavorite" @toggle="$emit('toggleFavorite', pokemon.name)" />
  </div>
</template>

<script setup lang="ts">
import type { BasicPokemon } from '@/types/Pokemon'
import { capitalize } from '@/utils/capitalize'
import BaseFavoriteButton from '@/components/UiKit/Button/BaseFavoriteButton/BaseFavoriteButton.vue'
import './PokemonItem.css'

defineProps<{
  pokemon: BasicPokemon
  isFavorite: boolean
}>()

defineEmits<{
  (e: 'select', name: string): void
  (e: 'toggleFavorite', name: string): void
}>()
</script>
