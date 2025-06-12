<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provide, ref, onMounted } from 'vue'
import ToastNotification from '@/components/UiKit/Notification/ToastNotification.vue'

const toastRef = ref<InstanceType<typeof ToastNotification>>()

onMounted(() => {
  if (toastRef.value) {
    provide('notify', toastRef.value.notify)
  }
})
</script>

<template>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <ToastNotification ref="toastRef" />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f4f4f4;
  color: #222;
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
