'use strict'

console.log(JSON.stringify({
  type: 'info',
  message: new Date().toString()
}))

setTimeout(() => {
  console.log(JSON.stringify({
    type: 'error',
    message: 'LOGIN_FAILED'
  }))
}, 3000)
