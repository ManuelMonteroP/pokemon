import { inject } from 'vue'

export type ToastType = 'success' | 'error' | 'info'

export function useToast() {
  const notify = inject<(text: string, type?: ToastType, duration?: number) => void>('notify')
  if (!notify) throw new Error('Toast not initialized')
  return notify
}
