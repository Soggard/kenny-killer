import Vue from 'vue'
import Counter from '@/components/Counter.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from "@vue/test-utils"
import store from '../../../src/store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Counter.vue', () => {
  it('should render correct contents', () => {
    //const Constructor = Vue.extend(Counter)
    //const vm = new Constructor().$mount()
    const wrapper = shallowMount(Counter, { store, localVue })
    const button = wrapper.find('h1 .count')
    // expect(button.textContent).toEqual('0')

    wrapper.find('img').trigger('click')
    expect(wrapper.contains('img')).toBe(true)
  })
});
