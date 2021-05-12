/* eslint-disable no-param-reassign */
import Mock from 'mockjs'
import formatOptions from './formatOptions'

// eslint-disable-next-line no-underscore-dangle
Mock._mock = Mock.mock
Mock.mock = function mock (url, method, resFunc) {
  if (arguments.length === 1) {
    // eslint-disable-next-line no-underscore-dangle
    return this._mock(url)
  }
  if (arguments.length === 2) {
    console.error(
      'Function Mock.mock require three params: url, method, resFunc!!!'
    )
    return false
  }
  if (arguments.length === 3) {
    const methods = ['get', 'post', 'put', 'delete']
    if (!methods.includes(method.toLowerCase())) {
      console.error(
        "Function Mock.mock's second param should be get, post, put, delete!!!"
      )
      return false
    }
    if (typeof resFunc !== 'function') {
      console.error("Function Mock.mock's third param should be a function!!!")
      return false
    }
  }
  // 将注册的 url 转成能匹配查询字符串的正则
  if (typeof url === 'string') {
    url = url.replace(/\//g, '\\/')
    url += '(|\\?.*)$'
    url = new RegExp(url)
  } else if (!(url instanceof RegExp)) {
    console.error(
      "Function Mock.mock's first param should be a string or regexp!!!"
    )
    return false
  }
  // eslint-disable-next-line no-underscore-dangle
  this._mock(url, method, (options) => {
    // 格式化 options 对象
    // eslint-disable-next-line no-param-reassign
    options = formatOptions(options)
    let res = null
    try {
      res = resFunc(options)
    } catch (err) {
      res = err
    }
    // 将返回的测试数据打印到控制台
    console.groupCollapsed(
      `%c${options.type.toLowerCase()} | ${options.url}`,
      'color: green;'
    )
    console.log('%cparams: ', 'color: #38f')
    console.log(options.params)
    console.log('%cresponseData: ', 'color: #38f')
    console.log(res)
    console.groupEnd()
    console.log('---------------')
    return res
  })
  return false
}

export default Mock
