<template>
  <div ref="scrollContainer" class="pokemon-list-scroll" @scroll="onScroll">
    <PokemonItem v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" :isFavorite="isFavorite(pokemon)"
      @select="handleSelect" @toggleFavorite="$emit('toggleFavorite', $event)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BasicPokemon } from '@/types/Pokemon'
import PokemonItem from './Items/PokemonItem.vue'
import './PokemonList.css'

const props = defineProps<{
  pokemons: BasicPokemon[]
  favorites: string[]
}>()

const emit = defineEmits<{
  (e: 'toggleFavorite', name: string): void
  (e: 'select', name: string): void
  (e: 'loadMore'): void
}>()

const onScroll = (e: Event) => {
  const el = e.target as HTMLElement
  const bottomReached = el.scrollTop + el.clientHeight >= el.scrollHeight - 10
  if (bottomReached) emit('loadMore')
}

const isFavorite = (pokemon: BasicPokemon) =>
  props.favorites.includes(pokemon.name)

const isBlocked = ref(false)

const handleSelect = (name: string) => {
  if (isBlocked.value) return

  isBlocked.value = true
  emit('select', name)

  setTimeout(() => {
    isBlocked.value = false
  }, 1000)
}


</script>
