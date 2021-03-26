const screenLoad = document.querySelector('.screen-load')

const stars = () => {
  const count = 20

  for (let i = 0; i < count; i++) {
    const star = document.createElement('i')
    const x = Math.floor(Math.random() * window.innerWidth)

    const duration = Math.random() * 1
    const h = Math.random() * 100

    star.style.left = `${x}px`
    star.style.width = `${1}px`
    star.style.height = `${(50 + h)}px`
    star.style.animationDuration = `${duration}s`
    
    screenLoad.appendChild(star)
  }
}

const hiddenScreen = () => {
  screenLoad.style.display = 'none'
  document.body.style.overflowY = 'scroll' 
}

stars()
setTimeout(hiddenScreen, 2000)