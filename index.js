
const express = require ("express")
const app = express ()
const port = 3000

app.get ("/", (req, res) =>{
    console.log("Entrou Aqui")
    res.send ("Hello Word")
})

app.post("/", (req, res) =>{
    res.send("App Post")
})


app.listen(port, () => {
console.log (`app online na porta ${port}`)

})

