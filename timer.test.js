import { timer, invokeTimer } from './timer'

/*
test('timer 测试', (done) => {
  timer(() => {
    expect(1).toBe(1)
    done()
  })
})
*/

// jest 模拟 timers
jest.useFakeTimers()

test('fake timer 测试', () => {
  const fn = jest.fn()
  timer(fn)
  // jest 立即执行 timer，无视 timer 中定义的延迟
  jest.runAllTimers()
  expect(fn).toHaveBeenCalledTimes(1)
})

test('fake invokeTimer 测试 运行两次', () => {
  const fn = jest.fn()
  invokeTimer(fn)
  jest.runAllTimers()
  expect(fn).toHaveBeenCalledTimes(2)
})

test('fake invokeTimer 测试 只运行处于队列中的 timer', () => {
  const fn = jest.fn()
  invokeTimer(fn)
  // 只会让处于当前队列中的 timer 立即执行
  jest.runOnlyPendingTimers()
  expect(fn).toHaveBeenCalledTimes(1)
})

// 迪亚波罗-绯红之王 快进时间/削除时间间隔
test('fake invokeTimer 测试 削除时间间隔', () => {
  const fn = jest.fn()
  invokeTimer(fn)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000) // 多次快进 在上一次快进的基础上，快进
  expect(fn).toHaveBeenCalledTimes(2)
})