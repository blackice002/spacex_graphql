const express = require('express')
const app =express();
const env = require('dotenv');

env.config();


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`App running on port : ${PORT}`))



