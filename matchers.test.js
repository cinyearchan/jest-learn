test('toMatch', () => {
  const str = 'http://www.google.com'
  expect(str).toMatch(/google/)
})

test('toContain', () => {
  const arr = ['www', 'google', 'com']
  const data = new Set(arr)
  expect(data).toContain('google')
})

const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}

test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow(/this is a new error/)
})
