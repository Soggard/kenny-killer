import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.count').textContent).toEqual('0')
  })
});
