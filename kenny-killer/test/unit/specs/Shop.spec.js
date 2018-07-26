import Vue from 'vue'
import Shop from '@/components/Shop'

describe('Shop.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Shop);
    const vm = new Constructor().$mount();
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //  .toEqual('0')
  })
})
