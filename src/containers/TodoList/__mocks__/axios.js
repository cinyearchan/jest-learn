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
        if (this.success) {
          resolve(undoList)
        } else {
          reject(new Error())
        }
      })
    }
  }
}
