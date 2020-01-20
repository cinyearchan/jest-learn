import { mount } from '@vue/test-utils'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../../TodoList/TodoList.vue'
import store from '../../../../store'
import axios from '../../__mocks__/axios'

beforeEach(() => {
  axios.success = true
  jest.useFakeTimers()
})

it(`
  1. 用户会在 header 输入框输入内容
  2. 用户会点击回车按钮
  3. 列表项应该增加用户输入内容的列表项
`, () => {
  const wrapper = mount(TodoList, { store })
  const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
  const content = 'hello world'
  inputElem.setValue(content)
  inputElem.trigger('change')
  inputElem.trigger('keyup.enter')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(listItems.length).toBe(1)
  expect(listItems.at(0).text()).toContain(content)
})

it(`
  1. 用户进入页面时，请求远程数据
  2. 列表应该展示远程返回的数据
`, (done) => {
  const wrapper = mount(TodoList, { store })
  // 等待异步数据渲染完成
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(2)
    done()
  })
})

// 异步函数的测试
/*
it(`
 1. 用户进入页面时，等待 5s
 2. 列表应该展示远程返回的数据
`, () => {
  const wrapper = mount(TodoList, { store })

  expect(setTimeout).toHaveBeenCalledTimes(1)

  jest.runAllTimers()
  // jest.advanceTimersByTime(5000)

  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(2)
  })
})
*/

it(`
 1. 用户进入页面时，请求数据失败
 2. 列表应该展示空数据，不能崩溃
`, (done) => {
  axios.success = false
  const wrapper = mount(TodoList, { store })
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(0)
    done()
  })
})
