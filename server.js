const express = require(`express`)
const path = require(`path`)
const api = require(`./server/routes/api.js`)
const bodyParser = require(`body-parser`)
// const logic
const app = express()
app.use(`/`,api)
app.use(express.static(path.join(__dirname,`dist`)))
app.use(express.static(path.join(__dirname,`node_modules`)))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = 8080
app.listen(port,function(){
    console.log(`Serving up ${port}!`)
})