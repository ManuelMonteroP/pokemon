<template>
  <div class="pokemon-item" @click="$emit('select', pokemon.name)">
    <span class="pokemon-name">{{ capitalize(pokemon.name) }}</span>
    <button class="star-btn" @click.stop="$emit('toggleFavorite', pokemon.name)">
      <img :src="isFavorite ? starFilled : starOutline" alt="favorite" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { BasicPokemon } from '@/types/Pokemon'
import { capitalize } from '@/utils/capitalize'
import starFilled from '@/assets/icons/star-filled.svg'
import starOutline from '@/assets/icons/star-outline.svg'
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
