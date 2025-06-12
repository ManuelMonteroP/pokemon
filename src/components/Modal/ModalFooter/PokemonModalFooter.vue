<template>
  <div class="modal-footer">
    <BaseButton text="Share to my friends" @click="$emit('share')" />
    <BaseFavoriteButton :class="{ active: isFavorite }" :is-active="isFavorite" @toggle="$emit('toggleFavorite')" />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UiKit/Button/BaseButton.vue'
import BaseFavoriteButton from '@/components/UiKit/Button/BaseFavoriteButton/BaseFavoriteButton.vue'

defineProps<{
  isFavorite: boolean
}>()

defineEmits<{
  (e: 'share'): void
  (e: 'toggleFavorite'): void
}>()
</script>

<style scoped>
.modal-footer {
  padding: 5px 30px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
