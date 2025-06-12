<template>
  <div class="base-input" :class="{ disabled }">
    <img v-if="icon" :src="icon" alt="icon" class="input-icon" />
    <input :placeholder="placeholder" :disabled="disabled" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      :class="{ 'has-text': !!modelValue }" />
  </div>
</template>

<script setup lang="ts">
import './BaseInput.css'

defineProps<{
  modelValue: string
  placeholder?: string
  icon?: string
  disabled?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
