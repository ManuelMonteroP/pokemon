<template>
  <TransitionGroup name="toast" tag="div" class="toast-container">
    <div v-for="msg in messages" :key="msg.id" :class="['toast', msg.type]">
      {{ msg.text }}
    </div>
  </TransitionGroup>
</template>


<script setup lang="ts">
import { ref } from 'vue'

type ToastType = 'success' | 'error' | 'info'

interface ToastMessage {
  id: number
  text: string
  type: ToastType
}

const messages = ref<ToastMessage[]>([])

let counter = 0

function notify(text: string, type: ToastType = 'info', duration = 2500) {
  const id = counter++
  messages.value.push({ id, text, type })

  setTimeout(() => {
    messages.value = messages.value.filter((msg) => msg.id !== id)
  }, duration)
}

defineExpose({ notify })
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.toast {
  background: #333;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.95;
  transition: all 0.3s ease;
}

.toast.success {
  background: #4caf50;
}

.toast.error {
  background: #f44336;
}

.toast.info {
  background: #2196f3;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
</style>
