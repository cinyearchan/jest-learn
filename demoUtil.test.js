jest.mock('./util') // mock “接管”了 util
// Util,Util.a,Util.b -> jest.fn
/* 
不希望自动接管，有两种方法：
1. 可以在 __mocks__ 目录内创建 util 文件，手动 mock 相关方法
2. 
jest.mock('./util', () => {
  const Util = jest.fn(() => {
    console.log('constructor --')
  })
  Util.prototype.a = jest.fn(() => {
    console.log('a --')
  })
  Util.prototype.b = jest.fn(() => {
    console.log('b --')
  })
  return Util
})
*/

import Util from './util'
import demoFunction from './demoUtil'


test('测试 demoFunction', () => {
  demoFunction()
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})

// 单元测试-只关注本单元的内容，若涉及其他模块，则用 mock 进行模拟
// 集成测试-对本单元及其包含的模块统一测试
