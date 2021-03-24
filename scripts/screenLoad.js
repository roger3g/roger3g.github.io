const screenLoad = document.querySelector('.screen-load')

setTimeout(() => {
  screenLoad.style.display = 'none'
  document.body.style.overflow = 'scroll'
}, 2000)