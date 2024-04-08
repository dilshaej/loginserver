require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const loginServer = express()

loginServer.use(cors())
loginServer.use(express.json())
loginServer.use(router)

const PORT = 3000 || process.env.PORT

loginServer.listen(PORT,()=>{
    console.log(`Login Server Started At : ${PORT}`);
})


loginServer.get("/",(req,res)=>{
res.status(200).send(`Login Server Started!!!`)
})

