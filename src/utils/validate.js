export const validPhone = (rule, value, callback) => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  if(!reg.test(value)){
    return callback(new Error())
  }
  return callback()
}

export const validIdcard = (rule, value, callback) => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  if(!reg.test(value)){
    return callback(new Error())
  }
  return callback()
}
