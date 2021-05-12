export const dateFormate = (data) => {
  let time = data
  time = time.replace(/([年月])/g, '-')
  time = time.replace(/日/g, '')
  const timeArr = time.split('-')
  const year = timeArr[0]
  const month = Number.parseInt(timeArr[1], 10) > 10 ? timeArr[1] : `0${timeArr[1]}`
  const day = Number.parseInt(timeArr[2], 10) > 10 ? timeArr[2] : `0${timeArr[2]}`
  return `${year}-${month}-${day}`
}

export const other = () => {

}
