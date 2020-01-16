export const timer = (callback) => {
  setTimeout(() => {
    callback()
  }, 3000)
}

export const invokeTimer = (callback) => {
  setTimeout(() => {
    callback()
    setTimeout(() => {
      callback()
    }, 3000)
  }, 3000)
}