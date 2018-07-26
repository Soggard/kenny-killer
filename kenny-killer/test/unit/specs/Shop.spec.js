import Vue from 'vue'
import Shop from '@/components/Shop'
import { shallowMount } from "@vue/test-utils"

describe('Shop.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Shop);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.shopping-area'))
      .toContainEqual('Sauvegarder la partie');
  })
})
