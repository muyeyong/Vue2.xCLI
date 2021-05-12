import { validPhone } from '@/utils/validate'

describe('手机号校验测试',()=>{
  it('测试手机号为空是否通过',()=>{
    let result;
    validPhone('', '', (res)=>{
      result = !res;
    })
    expect(result).toBeFalsy()
  })
  it('测试手机号错误是否通过',()=>{
    let result;
    validPhone('', 123, (res)=>{
      result = !res;
    })
    expect(result).toBeFalsy()
  })
  it('测试手机号正确是否通过',()=>{
    let result;
    validPhone('', 18142620787, (res)=>{
      result = !res;
    })
    expect(result).toBeTruthy()
  })
})
