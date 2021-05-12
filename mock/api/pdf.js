import Mock from '../utils/mock'

Mock.mock('/userConfirm', 'get', options => {
  console.log('options', options)
  return {
    src: '/mock/assets/用户知悉书.pdf'
  }
})
