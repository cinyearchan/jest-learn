import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    fn(res.data)
  })
}

export const fetchPromise = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}

export const fetchError404 = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json')
}
