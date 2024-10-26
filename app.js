const express = require('express')

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use((req,res)=>{
    res.status(200).text("Hello there this is being runned from vercel servrless function, and is and xpress server")
})

module.exports = app