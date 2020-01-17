import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWrapper } from '../../../../utils/testUtils'

describe('Header 组件', () => {
  it('包含 input 框', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    expect(input.exists()).toBe(true)
  })

  it('input 框初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it('样式发生改变，做出提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })

  it('input 框输入回车，有内容时，向外触发事件，同时清空 inputValue', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('hello world')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })

  it('input 框输入回车，无内容时，无反应', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
})
