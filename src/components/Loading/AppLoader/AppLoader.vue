<template>
  <div v-if="modelValue" class="loading-screen">
    <PokeballLoaderIcon />
  </div>
</template>

<script setup lang="ts">
import PokeballLoaderIcon from '../Icon/PokeballLoaderIcon.vue'
import './AppLoader.css'

defineProps<{
  modelValue: boolean
}>()
</script>
