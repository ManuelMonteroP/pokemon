import { mount } from '@vue/test-utils'
import BaseButton from '@/components/UiKit/Button/BaseButton.vue'
import { describe, expect, it } from 'vitest'

describe('BaseButton', () => {
  it('emite click event', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: 'Click Me',
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
