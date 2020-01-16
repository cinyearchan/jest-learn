import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
// import Vue from 'vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

// eslint-disable-next-line no-undef
describe('HelloWorld.vue', () => {
  /*
  // eslint-disable-next-line no-undef
  it('renders props.msg when passed', () => {
    const root = document.createElement('div')
    root.className = 'root'
    document.body.appendChild(root)
    new Vue({
      render: h => h(HelloWorld, {
        props: {
          msg: 'dell lee'
        }
      })
    }).$mount('.root')
    console.log(document.body.innerHTML)
    // eslint-disable-next-line no-undef
    expect(document.getElementsByClassName('hello').length).toBe(1)
  })
  */

  // eslint-disable-next-line no-undef
  it('renders props.msg when passed', () => {
    const msg = 'dell lee'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    // eslint-disable-next-line no-undef
    expect(wrapper.findAll('.mmm').length).toBe(1)
    // eslint-disable-next-line no-undef
    expect(wrapper.props('msg')).toEqual(msg)
  })

  // eslint-disable-next-line no-undef
  it('组件渲染正常', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'dell lee' }
    })
    // eslint-disable-next-line no-undef
    expect(wrapper).toMatchSnapshot() // 常用快照对 UI 进行测试
  })
})
