const express = require('express')
const app = express()

app.get('/get', (req,res) => {
    res.send({ data: [1, 2, 3] })
}) 

app.listen(8081, ()=>{
    console.log("Servidor Rodando http://localhost:8081");
});