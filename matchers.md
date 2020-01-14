# 匹配器

### toBe
```javascript
test('测试10与10相匹配', () => {
  // toBe 匹配器 matchers object.is ===
  const a = { one: 1 }
  expect(a).toBe({ one: 1 })
})
```

### toEqual
```javascript
test('测试对象内容相等', () => {
  // toEqual 匹配器
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
})
```

### toBeNull
```javascript
test('测试对象是否为空', () => {
  // toBeNull 匹配器
  const a = null
  expect(a).toBeNull()
})
```

## 真假相关的匹配器

### toBeUndefined
```javascript
test('toBeUndefined 匹配器', () => {
  // toBeUndefined 匹配器
  const a = undefined
  expect(a).toBeUndefined()
})
```

### toBeDefined (与 toBeUndefined 相反)
```javascript
test('toBeDefined 匹配器', () => {
  // toBeDefined 匹配器
  const a = 1
  expect(a).toBeDefined()
})
```

### toBeTruthy
```javascript
test('toBeTruthy 真值匹配器', () => {
  // toBeTruthy 匹配器
  const a = 1
  expect(a).toBeTruthy()
})
```

### toBeFalsy
```javascript
test('toBeFalsy 假值匹配器', () => {
  // toBeFalsy 匹配器
  const a = 0
  expect(a).toBeFalsy()
})
```

### not (取反，常与其他匹配器组合使用)
```javascript
test('not 取反匹配器', () => {
  // not 匹配器
  const a = 1
  expect(a).not.toBeFalsy()
  // 等同于
  expect(a).toBeTruthy()
})
```


## 与数字相关

### toBeGreaterThan 大于
```javascript
test('toBeGreaterThan', () => {
  const count = 10
  expect(count).toBeGreaterThan(9)
})
```

### toBeLessThan 小于
```javascript
test('toBeLessThan', () => {
  const count = 10
  expect(count).toBeLessThan(11)
})
```

### toBeGreaterThanOrEqual 大于或等于
```javascript
test('toBeGreaterThanOrEqual', () => {
  const count = 10
  expect(count).toBeGreaterThanOrEqual(10)
})
```

### toBeLessThanOrEqual 小于或等于
```javascript
test('toBeLessThanOrEqual', () => {
  const count = 10
  expect(count).toBeLessThanOrEqual(11)
})
```

### toBeCloseTo (处理 JS 小数精度缺失的缺陷)
```javascript
test('toBeCloseTo', () => {
  const firstNumber = 0.1
  const secondNumber = 0.2
  expect(firstNumber + secondNumber).toBeCloseTo(0.3)
})
```


## 与字符相关

### toMatch (相当于 String.prototype.indexOf 或 String.prototype.includes)
```javascript
test('toMatch', () => {
  const str = 'http://www.google.com'
  expect(str).toMatch('google')
  expect(str).toMatch(/google/)
  expect(str).toMatch(/googler/) // failed
})
```

## 与数组相关 Array Set

### toContain (相当于 Array.prototype.includes)
```javascript
test('toContain', () => {
  const arr = ['www', 'google', 'com']
  const data = new Set(arr)
  expect(arr).toContain('www')
  expect(data).toContain('www')
})
```

### 与异常相关

```javascript
// 公共代码，用于抛出异常
const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}
```

### toThrow (期待抛出异常)
```javascript
test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow()
  expect(throwNewErrorFunc).toThrow('this is a new error')
  expect(throwNewErrorFunc).toThrow('this is a error') // failed
  expect(throwNewErrorFunc).not.toThrow() // fialed 期待不抛出，但实际上会抛出
})
```
