import { describe, it, expect, vi } from 'vitest'
import { useToast } from '@/composables/useToast'
import { inject } from 'vue'

vi.mock('vue', async () => {
  const actual = (await import('vue')) as Record<string, unknown>
  return {
    ...actual,
    inject: vi.fn(),
  }
})

describe('useToast', () => {
  it('should return the notify function when inject returns it', () => {
    const mockNotify = vi.fn()
    // @ts-expect-error: mock
    ;(inject as unknown as vi.Mock).mockReturnValue(mockNotify)

    const notify = useToast()
    notify('Test message', 'info', 3000)

    expect(mockNotify).toHaveBeenCalledWith('Test message', 'info', 3000)
  })

  it('should throw an error when notify is not injected', () => {
    // @ts-expect-error: mock
    ;(inject as unknown as vi.Mock).mockReturnValue(undefined)

    expect(() => useToast()).toThrow('Toast not initialized')
  })
})
