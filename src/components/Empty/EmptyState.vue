<template>
  <div class="empty-state">
    <h1 class="title-error">Uh-oh!</h1>
    <p class="text-error">You look lost on your journey!</p>
    <BaseButton text="Go back home" color="#f22539" @click="$emit('goBack')" />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UiKit/Button/BaseButton.vue'
import './EmptyState.css'

defineEmits<{
  (e: 'goBack'): void
}>()
</script>
