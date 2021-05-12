export const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  let result = ''
  reader.readAsDataURL(file)
  reader.onload = () => {
    result = reader.result
  }
  reader.onerror = (error) => {
    reject(error)
  }
  reader.onloadend = () => {
    resolve(result)
  }
})

export const other = () => {

}
