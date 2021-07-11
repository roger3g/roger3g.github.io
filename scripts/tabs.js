const html = {
  links: [...document.querySelector('.tab-links').children],
  contents: [...document.querySelector('.tab-content').children],
  openTab: document.querySelector('[data-open]')
}

const hideAllTabContent = () => {
  html.contents.forEach(children => {
    children.style.display = 'none'
  })
}

const removeAllActiveClass = () => {
  html.links.forEach(tab => {
    tab.className = tab.className.replace(' active', '')
  })
}

const showCurrentTab = id => {
  const tabContent = document.querySelector(`#${id}`)
  tabContent.style.display = 'flex'
}

const selectTab = event => {
  hideAllTabContent()
  removeAllActiveClass()

  const target = event.currentTarget
  showCurrentTab(target.dataset.id)

  target.className += ' active'
}

const listenForChange = () => {
  html.links.forEach(tab => {
    tab.addEventListener('click', selectTab)
  })
}

const start = () => {
  hideAllTabContent()
  listenForChange()

  html.openTab.click()
}

start()