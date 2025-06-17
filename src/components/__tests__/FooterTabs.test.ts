import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterTabs from '@/components/Footer/FooterTabs.vue'

const BaseButtonStub = {
  props: ['text', 'icon', 'disabled', 'fullWidth'],
  emits: ['click'],
  template: `<button :disabled="disabled" @click="$emit('click')">{{ text }}</button>`,
}

describe('FooterTabs.vue', () => {
  it('deshabilita el botón correcto según modelValue', () => {
    const wrapper = mount(FooterTabs, {
      props: { modelValue: 'all' },
      global: {
        stubs: { BaseButton: BaseButtonStub },
      },
    })

    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)
    expect(buttons[0].attributes('disabled')).toBeUndefined()
    expect(buttons[1].attributes('disabled')).toBe('')
  })
})
