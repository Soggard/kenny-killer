import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
    it('renders props.msg when passed', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.vm.count()).toBe(0);
        wrapper.vm.increment();
        expect(wrapper.vm.count()).toBe(1);
    });
});
