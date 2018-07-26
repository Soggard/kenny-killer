import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.main h1').textContent)
    //  .toEqual('Welcome to Your Vue.js App')
  })
})
