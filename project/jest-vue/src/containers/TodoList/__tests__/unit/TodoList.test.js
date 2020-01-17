/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header.vue'

describe('TodoList.vue', () => {
  it('初始化时，undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('TodoList 监听到 Header 的 add 事件时，会增加一个内容', () => {
    const content = 'buy food'
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    header.vm.$emit('add', content)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([content])
  })
})
