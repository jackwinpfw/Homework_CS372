const express = require('express')
const path = require('path')
const app = express()
const port = 7703

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/cs372search.html'));
})

app.get('/index.js', (req, res) => {
    if ('q' in req.query) {
        res.redirect('https://www.google.com/search?q=' + req.query.q)
    }
    else {
        res.sendFile(path.join(__dirname, 'public/cs372search.html'));
    }
})

app.listen(port, () => {
    console.log('Server started on port ' + port)
})