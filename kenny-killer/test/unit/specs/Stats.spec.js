import Vue from 'vue'
import Stats from '@/components/Stats'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from "@vue/test-utils"
import store from '../../../src/store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('KennyKiller.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Stats, { store, localVue })
    expect(wrapper.contains('div')).toBe(true)
    expect(wrapper.contains('#kps')).toBe(true)
    expect(wrapper.contains('#kpc')).toBe(true)
  })
})
