import { runCallback, runCallbackArgs, createObject, getData } from './demo'
import axios from 'axios'
// jest 接管请求，模拟请求，测试用例不会去请求真正的数据
jest.mock('axios')

test('测试 runCallback', () => {
  const func = jest.fn() // mock 函数，捕获函数的调用
  runCallback(func)
  expect(func).toBeCalled() // 调用追溯
  /*
  func.mock
  {
    calls: [...func执行时接收到传递进来的参数],
    instances: [undefined, undefined, undefined], // func 被当做函数使用
    invocationCallOrder: [1, 2, 3], // func 调用的顺序（多次调用的顺序）
    results: [         
      { type: 'return', value: undefined }, // func 函数执行后的结果 func.mockReturnValueOnce('hello') 手动设定一次返回结果(可链式调用)，则 results 数组第一项 value 为 hello
      ...                                   //                    func.mockReturnValue('hello') 手动设定所有返回结果 value 都是 hello
      ...
    ]
  }
  */

  /*
  func.mockReturnValue('hello')
  expect(func.mock.results[0].value).toBe('hello')
  */

  /*
  runCallback(func)
  runCallback(func)
  runCallback(func)
  expect(func.mock.calls.length).toBe(3)
  */
})

// func.mock 中的 instances
test('测试 createObject', () => {
  const func = jest.fn()
  createObject(func)
  /*
  func.mock
  {
    calls: [ [] ],
    instances: [ mockConstructor {} ], // func 被当做构造函数使用，每次调用时 this 的指向
    invocationCallOrder: [ 1 ],
    results: [
      { type: 'return', value: undefined }
    ]
  }
  */
})

// 改变函数的内部实现
test('测试 getData', async () => {
  // 此处更改了 getData 函数的内部实现，不会去请求真正的数据
  // 请求被接管，模拟了返回结果
  // 异步获取数据内容 --> 同步准备数据内容
  axios.get.mockResolvedValue({ data: 'hello' })
  // axios.get.mockResolvedValueOnce({ data: 'hello' }) // 只手动设置一次
  // axios.get.mockResolvedValueOnce({ data: 'world' }) // 连用多次设置
  await getData().then(res => {
    expect(res).toBe('hello')
  })
})

/*
总结：
1. 捕获函数的调用和返回结果，以及 this 和调用顺序
2. 可以自由的设置返回结果
3. 可以改变函数的内部实现
*/

/*
PS.
func mock 函数的实现
最终结果类似于
func.mockReturnValue('hello')
func.mockReturnValueOnce('hello')

1.
const func = jest.fn()
func.mockImplementation(() => {
  console.log('123123') // 额外逻辑
  return 'hello' // 省去 func.mockReturnValue('hello')
})

2.
const func = jest.fn(() => {
  console.log('123123')
  return 'hello'
})

3. 多次定义
func.mockImplementationOnce(() => {
  // 可以设置额外逻辑
  return 'hello'
})
func.mockImplementationOnce(() => {
  // 可以设置额外逻辑
  return 'world'
})
runCallback(func)
runCallback(func)
expect(func.mock.results[0].value).toBe('hello') // pass
expect(func.mock.results[1].value).toBe('world') // pass

// 关于 return this
func.mockImplementation(() => {
  return this
})
runCallback(func)
expect(func.mock.results[0].value).toBeUndefined() // pass

func.mockReturnThis() // 简化了 func 定义时内部的 return this
runCallback(func)
expect(func.mock.results[0].value).toBeUndefined() // pass

// 关于 func.mock 中的 calls
runCallback(func)
// func 调用时第一次传递进去的参数是 'abc'
expect(func.mock.calls[0]).toEqual(['abc']) // pass
// func 调用时每一次传递进去的参数是 'abc'
expect(func).toBeCalledWith('abc') // pass
*/
