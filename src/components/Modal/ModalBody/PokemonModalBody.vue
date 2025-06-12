<template>
  <div class="modal-body">
    <div class="detail-row"><strong>Name:</strong> {{ capitalize(pokemon.name) }}</div>
    <div class="detail-row"><strong>Weight:</strong> {{ pokemon.weight }}</div>
    <div class="detail-row"><strong>Height:</strong> {{ pokemon.height }}</div>
    <div class="detail-row"><strong>Types:</strong> {{ types }}</div>
  </div>
</template>

<script setup lang="ts">
import type { PokemonDetail } from '@/types/Pokemon'
import { computed } from 'vue'
import { capitalize } from '@/utils/capitalize'

const props = defineProps<{
  pokemon: PokemonDetail
}>()

const types = computed(() =>
  props.pokemon.types.map(t => capitalize(t.type.name)).join(', ')
)
</script>

<style scoped>
.modal-body {
  padding: 10px 30px 20px;
}

.detail-row {
  padding: 14px 0;
  border-bottom: 1px solid #eee;
  font-family: Lato, sans-serif;
  font-size: 18px;
}

.detail-row strong {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: black;
}

.detail-row span {
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #5e5e5e;
}
</style>
