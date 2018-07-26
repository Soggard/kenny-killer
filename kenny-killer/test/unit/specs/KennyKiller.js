import { shallowMount } from "@vue/test-utils";
import KennyKiller from "@/components/KennyKiller.vue";
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from "@vue/test-utils"
import store from '../../../src/store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe("KennyKiller.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(KennyKiller, { store, localVue })
    expect(wrapper.contains('div .main')).toBe(true)
    wrapper.find('span #kps')
    expect(wrapper.text()).toMatch('0');
  });
});
