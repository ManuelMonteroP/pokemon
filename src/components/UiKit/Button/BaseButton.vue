<template>
  <button class="base-button" :class="[
    { 'full-width': fullWidth, 'is-disabled': disabled }
  ]" :style="{
    backgroundColor: disabled ? '#D9D9D9' : color || '#F22539'
  }" @click="$emit('click')">
    <img v-if="icon" :src="icon" alt="icon" class="btn-icon" />
    <span class="base-button-text" :class="{ 'text-padding': !fullWidth }">
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
import './BaseButton.css'

defineProps<{
  text: string
  icon?: string
  color?: string
  fullWidth?: boolean
  disabled?: boolean
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>
