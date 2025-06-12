<template>
  <div class="modal-header">
    <img class="header-bg" src="@/assets/images/header-bg.png" alt="background" />

    <div class="image-container">
      <img v-if="pokemon.sprites?.other?.['official-artwork']?.front_default" class="pokemon-sprite"
        :class="{ 'visible': imageLoaded }" :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name" @load="onImageLoad" />

      <div v-if="!imageLoaded" class="spinner"></div>
    </div>

    <button class="close-btn" @click="$emit('close')">
      <img src="@/assets/icons/close.svg" alt="close" />
    </button>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import type { PokemonDetail } from '@/types/Pokemon'

defineProps<{
  pokemon: PokemonDetail
}>()

defineEmits<{
  (e: 'close'): void
}>()

const imageLoaded = ref(false)
const onImageLoad = () => {
  imageLoaded.value = true
}
</script>

<style scoped>
.modal-header {
  position: relative;
  height: 220px;
}

.header-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pokemon-sprite {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 18px;
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
}

.image-container {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-sprite {
  width: 100%;
  opacity: 0;
  transition: opacity 0.4s ease-in;
  position: absolute;
}

.pokemon-sprite.visible {
  opacity: 1;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #3e8ed0;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
