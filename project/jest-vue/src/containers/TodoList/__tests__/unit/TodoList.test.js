import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
// import Header from '../../components/Header.vue'
import UndoList from '../../components/UndoList.vue'

describe('TodoList 组件', () => {
  it('初始化时，列表应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it(/* TodoList 监听到 Header 的 add 事件时，会增加一个内容 */`addUndoItem 被执行后，内容会加一项`, () => {
    // 集成测试内容
    /*
    const content = 'buy food'
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    header.vm.$emit('add', content)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([content])
    */
    // 单元测试内容
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
  })

  it('被调用，应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('handleItemDelete 方法被调用时，列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
  })
})
