/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'

describe('TodoList.vue', () => {
  it('组件渲染正常', () => {
    const wrapper = shallowMount(TodoList)
  })
})
