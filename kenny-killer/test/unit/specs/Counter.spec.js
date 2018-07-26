import Vue from 'vue'
import Counter from '@/components/Counter.vue'
import { shallowMount } from "@vue/test-utils"

describe('Counter.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    console.log(vm);
    expect(vm.$el.querySelector('.count').textContent).toEqual('0')
  })
});
