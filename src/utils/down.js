function downloadBlob (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.responseType = "blob"

    xhr.onload = function () {
      resolve(xhr.response)
    }
    xhr.onerror = function () {
      reject(new Error("Download failed."))
    }
    xhr.send()
  })
}
export function downloadFile (url, fileName = "") {
  return downloadBlob(url, fileName)
    .then(resp => {
      if (resp.blob) {
        return resp.blob()
      }
      return new Blob([resp])
    })
    .then(blob => URL.createObjectURL(blob))
    // eslint-disable-next-line no-shadow
    .then(url => {
      // eslint-disable-next-line no-use-before-define
      downloadURL(url, fileName)
      URL.revokeObjectURL(url)
    })
    .catch(err => {
      throw new Error(err.message)
    })
}

export function downloadURL (url, name = "") {
  const link = document.createElement("a")
  link.download = name
  link.href = url
  if ("download" in document.createElement("a")) {
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    // 对不支持download进行兼容
    // eslint-disable-next-line no-use-before-define
    click(link, (link.target = "_blank"))
  }
}


function click (node) {
  try {
    node.dispatchEvent(new MouseEvent("click"))
  } catch (e) {
    const evt = document.createEvent("MouseEvents")
    evt.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null
    )
    node.dispatchEvent(evt)
  }
}
