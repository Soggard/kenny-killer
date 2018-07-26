import Vue from 'vue'
import Shop from '@/components/Shop'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from "@vue/test-utils"
import store from '../../../src/store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Shop.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Shop, { store, localVue })
    expect(wrapper.contains('div')).toBe(true)
    expect(wrapper.contains('.buyButton')).toBe(true)
    expect(wrapper.contains('.description')).toBe(true)
  })
})

