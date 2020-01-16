import { fetchData } from './demoMock'

// 在测试代码内部手动模拟返回的数据
// 此处的模拟，重点在模拟 axios
/*
import axios from 'axios'

jest.mock('axios')

test('测试 fetchData demoMock', () => {
  axios.get.mockResolvedValue({
    data: `(function(){return '123'})()`
  })
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})
*/

// jest 自动接管请求，寻找 mock 模拟
// 此处的模拟 重点在于接管 fetchData
jest.mock('./demoMock')
// jest 会接管 demoMock 中的请求，自动去 __mocks__ 文件夹中寻找相关请求 mock
// 会用 __mocks__ 目录下同名文件里的内容，忽略 ./demoMock 中的内容

const { getNumber } = jest.requireActual('./demoMock')
// jest 会去实际的 ./demoMock.js 文件中获取 getNumber
// 而不是去 __mocks__ 目录下的 demoMock.js 文件中寻找 getNumber
// 算是某种 hack
// jest.mock 会统一接管 demoMock 文件中的所有方法，如果个别方法不需要被接管，则可以通过 jest.requireActual 来“注明”

test('fetchData 测试 demoMock', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})
