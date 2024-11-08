const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {add, read} = require('./Database')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 2309
const user = process.env.USER
const pass = process.env.PASS
const url = `mongodb://${user}:${pass}@localhost:27017/course-db`

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/cs372search.html'))
})

app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/cs372search.html'))
})

app.get('/database/read', async (req, res) => {
    let query = req.query.q

    let items = await read(query)

    const data = { items: items }
    res.json(data)
})

app.get('/database/add', async (req, res) => {
    let query = req.query.q

    await add(query)
    const data = { message: "Added string: " + query }
    res.json(data)
})

app.listen(port, async () => {
    await mongoose.connect(url)
    console.log('Server started on port ' + port)

})

