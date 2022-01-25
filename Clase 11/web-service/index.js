const env = require('node-env-file')
env(__dirname + '/.env')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Ahora si puedo responder')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})