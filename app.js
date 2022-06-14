// Imports
const express = require("express")

// Config
const app = express()


// routes
app.get("/Products", function(req, res){
    res.send("Products")
})

app.get("/Products/:id", function(req, res){
    res.send(`Products ${req.params.id}`)
})

// Listen server
app.listen(3000)


