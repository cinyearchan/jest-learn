const undoList = {
  success: true,
  data: [{
    status: 'div',
    value: '1'
  }, {
    status: 'div',
    value: 'hello'
  }]
}

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve, reject) => {
        resolve(undoList)
      })
    }
  }
}
