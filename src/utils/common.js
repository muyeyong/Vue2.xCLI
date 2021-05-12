
// debounce 抖动
export function debounce (fn, delayTime) {
  let timeout
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn.apply(this, args)
    }, delayTime)
  }
}

// throttle 节流
export function throttle (fn, delayTime) {
  let timeout
  let last
  return function () {
    const now = new Date()
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    if (last && now - last < delayTime) {
      clearTimeout(timeout)
      timeout = setTimeout(function () {
        last = now
        fn.apply(this, args)
      }, delayTime)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}




