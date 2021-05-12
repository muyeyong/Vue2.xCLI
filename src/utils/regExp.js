// 手机号码验证
export const isPhoneNum = (phoneNum) => phoneNum.match(/^1[3456789]\d{9}$/)

// 身份证验证
export const isIdCard = (idCard) => idCard.match(/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/)

// 中英文姓名验证
export const isName = (name) => name.match(/^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/)

// 银行卡验证
export const isBankCardNumber = (cardNumber) => cardNumber.match(/^[1-9]\d{9,29}$/)
