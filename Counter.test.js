import Counter from './Counter'

/*
let counter = null

beforeAll(() => {
  // 所有的测试用例开始之前
})

beforeEach(() => {
  // 每个测试用例开始之前
  counter = new Counter()
})

afterEach(() => {
  // 每个测试用例结束之后
})

afterAll(() => {
  // 所有的测试用例结束之后
  counter = null
})

// 顺序 beforeAll beforeEach afterEach afterAll

test('测试 Counter 中的 addOne 方法', () => {
  counter.addOne()
  expect(counter.number).toBe(1)
})
// 上下两个测试用例如果相关联，需要使用 beforeEach 在每个测试用例开始前重新初始化一个 counter
test('测试 Counter 中的 minusOne 方法', () => {
  counter.minusOne()
  expect(counter.number).toBe(-1)
})
*/

// 分组测试
// 思路
// 1.文件拆分：将 add 相关代码保留在当前文件，minus 相关代码放置在另一文件内
// 2. jest describe
describe('Counter 的测试代码', () => {
  let counter = null
  beforeEach(() => {
    counter = new Counter()
  })
  afterAll(() => {
    counter = null
  })

  describe('测试增加相关的代码', () => {
    test('测试 Counter 中的 addOne 方法-模块', () => {
      counter.addOne()
      expect(counter.number).toBe(1)
    })
    test('测试 Counter 中的 addTwo 方法-模块', () => {
      counter.addTwo()
      expect(counter.number).toBe(2)
    })

    /*
    // 当测试用例被 only 修饰符修饰时，会忽略其他测试用例，只运行被修饰的测试用例
    // 方便在一大片测试用例中针对单个测试用例进行调试
    test.only('单个测试用例', () => {
      counter.addOne()
      expect(counter.number).toBe(1)
    })
    */
  })

  describe('测试减少相关的代码', () => {
    test('测试 Counter 中的 minusOne 方法-模块', () => {
      counter.minusOne()
      expect(counter.number).toBe(-1)
    })
    test('测试 Counter 中的 minusTwo 方法-模块', () => {
      counter.minusTwo()
      expect(counter.number).toBe(-2)
    })
  })
})