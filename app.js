const express = require('express')
const path = require('path')
const { engine: expressHandlebars } = require('express-handlebars')

const app = express()
const port = process.env.PORT || 8080

app.engine('hbs', expressHandlebars({
  extname: '.hbs'
}))

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
