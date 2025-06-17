import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EmptyState from '@/components/Empty/EmptyState.vue'

describe('EmptyState.vue', () => {
  it('renders title and text', () => {
    const wrapper = mount(EmptyState)

    expect(wrapper.text()).toContain('Uh-oh!')
    expect(wrapper.text()).toContain('You look lost on your journey!')
    expect(wrapper.find('button').text()).toBe('Go back home')
  })

  it('emits goBack when button is clicked', async () => {
    const wrapper = mount(EmptyState)

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('goBack')
    expect(wrapper.emitted('goBack')?.length).toBe(1)
  })
})
