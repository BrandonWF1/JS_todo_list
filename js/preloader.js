const preloaderFunc = () => {
  window.onload = function () {
    document.body.classList.add('active')
    window.setTimeout(function () {
      document.body.classList.add('hidden')
      document.body.classList.remove('active')
    }, 1000)
  }
}
preloaderFunc()