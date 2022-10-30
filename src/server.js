const express = require("express");
const routes = require("./routes")
const app = express()

app.use(express.json())
app.use(routes)

app.get("/health", (req,res)=>{
    return res.json("Up!");
})

app.listen(3333, ()=>{
    console.log("Server rodando na porta 3333")
})