import Vue from 'vue'
import KennyKiller from '@/components/KennyKiller'

describe('KennyKiller.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(KennyKiller)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.main h1').textContent)
    //  .toEqual('Welcome to Your Vue.js App')
  })
})
