import Vue from 'vue'
import Stats from '@/components/Stats'
import { shallowMount } from "@vue/test-utils"

describe('KennyKiller.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Stats);
    const vm = new Constructor().$mount();
    const msg = "0";
    const wrapper = shallowMount(Stats, {
      propsData: { msg }
    });
   // expect(vm.$el.querySelector('#kps').textContent).toEqual('0');
   // expect(vm.$el.querySelector('#kpc').textContent).toEqual('1');

    expect(wrapper.text()).toMatch(msg);
  })
})
