// ternario 

const hora = 18

console.log(
    "Esta de",
    hora >= 0 && hora < 6 ? "Madrugada" :
    hora >= 6 && hora < 12 ? "dia" :
    hora >= 12 && hora < 18 ? "Tarde" :
    "Noite" 
)



