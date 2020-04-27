const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const port = process.env.PORT || 8080
const app = express()

const db = require('./config/db')

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.use(cors())
app.use(express.json())

routes(app)

app.listen(port, console.log('listening in port 8080'))
