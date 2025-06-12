<template>
  <div class="footer-tabs">
    <div class="footer-content">
      <BaseButton text="All" :icon="listIcon" :disabled="modelValue !== 'all'" :fullWidth="true"
        @click="$emit('update:modelValue', 'all')" />
      <BaseButton text="Favorites" :icon="starIcon" :disabled="modelValue !== 'favorites'" :fullWidth="true"
        @click="$emit('update:modelValue', 'favorites')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UiKit/Button/BaseButton.vue'
import listIcon from '@/assets/icons/list.svg'
import starIcon from '@/assets/icons/star.svg'
import './FooterTabs.css'

defineProps<{
  modelValue: 'all' | 'favorites'
}>()

defineEmits<{
  (e: 'update:modelValue', value: 'all' | 'favorites'): void
}>()
</script>
