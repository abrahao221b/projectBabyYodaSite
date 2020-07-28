const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("views engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("index.html")
})

server.get("/classes.html", function(req, res) {
    return res.render("classes.html")
})

server.listen(5000, () => {
    console.log("server is  running")
})