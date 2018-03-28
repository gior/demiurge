import { expect } from 'chai'
import { shallow, mount } from '@vue/test-utils'
import Mitem from '../../src/components/Mitem.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

describe('Mitem', () => {
  it('displays its title', () => {
    const title = 'new item'
    const wrapper = shallow(Mitem, {
      propsData: { item: { title }, index: 0 }
    })
    expect(wrapper.text()).to.include(title)
  })

  it('hides its children when inactive', () => {
    const title = 'parent'
    const title1 = 'child 1'
    const wrapper = mount(Mitem, {
      stubs: { 'Mitem': Mitem },
      propsData: {
        item: {
          title,
          items: [
            { title: title1 }
          ]
        }
      }
    })
    expect(wrapper.contains('.child')).to.be.true
    const child1 = wrapper.find('#sm-child1')
    expect(child1.isVisible()).not.to.be.true
  })

  it('displays its children when active', () => {
    const title = 'parent'
    const title1 = 'child 1'
    const title2 = 'child 2'
    const wrapper = mount(Mitem, {
      stubs: { 'Mitem': Mitem },
      propsData: {
        item: {
          title,
          items: [
            { title: title1 },
            { title: title2 }
          ]
        }
      }
    })
    // open the menu
    const toggle = wrapper.find('.when-closed')
    toggle.trigger('click')

    expect(wrapper.contains('.child')).to.be.true
    expect(wrapper.text()).to.include(title1)
    expect(wrapper.text()).to.include(title2)
  })
})
