/*import Vue from 'vue'
import KennyKiller from '@/components/KennyKiller'

describe('KennyKiller.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(KennyKiller)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.main h1').textContent)
    //  .toEqual('Welcome to Your Vue.js App')
  })
})*/

import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});