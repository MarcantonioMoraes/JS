const express = require ('express')
const app = express ()
const PORT = 3000

app.get ('/', () =>{
    console.log('Entrou Aqui')
    restart.send ('Hello Word')
})


app.listen(PORT, () => {
console.log ('app online na porta ${PORT}')

})



