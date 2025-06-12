<template>
  <div class="modal-footer">
    <BaseButton text="Share to my friends" @click="$emit('share')" />
    <button class="fav-floating" :class="{ active: isFavorite }" @click="$emit('toggleFavorite')">
      <img :src="isFavorite ? starFilled : starOutline" alt="favorite" />
    </button>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UiKit/Button/BaseButton.vue'
import starFilled from '@/assets/icons/star-filled.svg'
import starOutline from '@/assets/icons/star-outline.svg'

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

.fav-floating {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: #f0f0f0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fav-floating.active {
  background: #ffe066;
}
</style>
