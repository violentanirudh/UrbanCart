const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

nunjucks.configure('views', {
	autoescape: true,
	express: app
})

app.get('/', (req, res) => {
	res.render('index.html')
})

app.listen(3000, () => {
	console.log('Listening')
})