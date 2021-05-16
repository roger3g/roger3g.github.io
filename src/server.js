require('dotenv').config()

const express = require('express')
const router = express.Router()
const server = express()

const { join } = require('path')
const views = join(__dirname, '/../public/pages')

const port = process.env.PORT || 3333

server.set('view engine', 'ejs')

server.use(router)
server.use(express.urlencoded({ extended: true }))
server.use(express.static(join(__dirname, '../public')))

router.get('/home', (req, res) => {
  return res.render(`${views}/index`)
})

router.get('/about', (req, res) => {
  return res.render(`${views}/about`)
})

router.get('/projects', (req, res) => {
  return res.render(`${views}/projects`)
})

router.get('/contact', (req, res) => {
  return res.render(`${views}/contact`)
})

server.use((req, res) => {
  res.status(404).render(`${views}/not-found`)
})

server.listen(port, error => {
  const message = error
    ? 'Error when running the server'
    : `Server running on http://localhost:${port}`

  return console.log(message)
})
