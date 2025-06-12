<template>
  <button class="star-btn" @click.stop="$emit('toggle')">
    <img :class="{ 'favorite-anim': isActive }" :src="isActive ? starFilled : starOutline" alt="favorite" />
  </button>
</template>

<script setup lang="ts">
import starFilled from '@/assets/icons/star-filled.svg'
import starOutline from '@/assets/icons/star-outline.svg'

defineProps<{
  isActive: boolean
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<style scoped>
.star-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 44px;
  height: 44px;
}

.star-btn img {
  width: 44px;
  height: 44px;
}

.favorite-anim {
  animation: pop 0.3s ease;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
