import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList.vue'
import { findTestWrapper } from '../../../../utils/testUtils'
import { wrap } from 'module'

describe('UndoList 测试', () => {
  it('测试初始状态下应为空', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [] }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    expect(countElem.at(0).text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })

  it('参数为 [1, 2, 3]，count 值应该为3，且列表有内容和删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const deleteButtons = findTestWrapper(wrapper, 'delete-button')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toBe(3)
    expect(deleteButtons.length).toBe(3)
  })

  it('删除按钮被点击时，向外触发删除事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1) // delete 方法被执行次数
  })

  it('列表项被点击，向外触发 status 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const item = findTestWrapper(wrapper, 'item').at(1)
    item.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
    expect(wrapper.emitted().status[0][0]).toBe(1)
  })

  it('列表项显示一个输入框，两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input')
    expect(input.at(0).element.value).toBe('2')
    expect(input.length).toBe(1)
  })

  it('输入框失去焦点，向外触发 reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const inputElem = findTestWrapper(wrapper, 'input').at(0)
    inputElem.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it('输入框变化时，向外触发 change 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 123 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const inputElem = findTestWrapper(wrapper, 'input').at(0)
    inputElem.trigger('change')
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toEqual({
      value: '123',
      index: 1
    })
  })
})
