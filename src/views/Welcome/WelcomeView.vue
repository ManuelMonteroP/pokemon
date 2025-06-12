<template>
  <div class="welcome">
    <div class="pikachu-wrapper">
      <div class="circle-bg"></div>
      <img src="@/assets/images/pikachu.png" alt="Pikachu" class="pikachu" />
    </div>
    <h1 class="title-main">Welcome to Pokédex</h1>
    <p class="text-description">
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
    </p>
    <BaseButton text="Get started" @click="goToHome" />
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
import BaseButton from '@/components/UiKit/Button/BaseButton.vue'
import './WelcomeView.css'

const router = useRouter()

const goToHome = () => {
  router.push('/home')
}
</script>

<style scoped></style>
