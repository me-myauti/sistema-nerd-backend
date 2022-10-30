const express = require("express")
const myRoutes = express.Router()
const product = [{nome: "Fruta", preco: 2.50}]

myRoutes.post("/insertProduct", (req,res)=>{
    const { name } = req.body
    product.push({name, preco: 4.50})
    return res.status(201).json(product)
})

module.exports = myRoutes