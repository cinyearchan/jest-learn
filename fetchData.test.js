import { fetchData, fetchPromise, fetchError404 } from './fetchData'

// callback 异步回调的写法
test('fetchData 返回结果为 { success: true }', (done) => {
  fetchData(data => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})

// promise 的写法
test('返回 promise 的 fetchPromise 的返回结果为 { success: true }', () => {
  return fetchPromise().then(res => {
    expect(res.data).toEqual({
      success: true
    })
  })
})

// 期望是错误接口，测试错误接口404
test('判断接口返回结果为 404', () => {
  return fetchError404().catch(err => {
    expect(err.toString().indexOf('404') > -1).toBe(true)
  })
})

// 期望是正确接口，测试错误接口404
/*
test('期望正确，测试404，断言', () => {
  expect.assertions(1)
  // 因为 fetchPromise 是一个正确的接口，catch 不会捕获到错误，故测试代码不会执行
  // 但是断言函数规定，下方测试代码至少执行一次，所以正确接口测试404，测试不通过
  return fetchPromise().catch(err => {
    expect(err.toString().indexOf('404') > -1).toBe(true)
  })
}) */

// 对比
test('未知接口，测试404，断言', () => {
  expect.assertions(1)
  // fetchError404 是一个返回错误接口，catch 能够捕获到错误，所以下方测试代码会执行
  return fetchError404().catch(err => {
    expect(err.toString().indexOf('404') > -1).toBe(true)
  })
})

// 切记，异步代码中，catch 一定要搭配 assertions 使用

// 异步代码测试用例的另一种写法
// resolve
test('fetchPromise 返回结果为 { success: true } 另一个写法', () => {
  return expect(fetchPromise()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})
// reject
test('fetchError404 返回结果为 404 另一种写法', () => {
  return expect(fetchError404()).rejects.toThrow()
})

// async-await 写法
// resolve
test('fetchPromise 返回结果为 { success: true } async-await 写法', async () => {
  await expect(fetchPromise()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})
// reject
test('fetchError404 返回结果为 404 async-await 写法', async () => {
  await expect(fetchError404()).rejects.toThrow()
})

// async-await 同步写法
// resolve
test('fetchPromise 返回结果为 { success: true } async-await 同步写法', async () => {
  const res = await fetchPromise()
  expect(res.data).toEqual({
    success: true
  })
})
// reject
test('fetchError404 返回结果为 404 async-await 同步写法', async () => {
  expect.assertions(1)
  try {
    await fetchError404()
  } catch (e) {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  }
})

