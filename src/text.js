// ternario 

const hora = 18
const vd = 100

console.log(
    "Esta de",
    hora >= 0 && hora < 6 ? "Madrugada" :
    hora >= 6 && hora < 12 ? "dia" :
    hora >= 12 && hora < 18 ? "Tarde" :
    "Noite" 
)

console.log (
    "Sua Saude é",
    vd >= 0 && vd < 10 ? "Pessima" :
    vd >= 10 && vd < 30 ? "Ruim" :
    vd >= 30 && vd < 60 ? "Boa" :
    vd >= 60 && vd < 90 ? "Ótima" :
    "Exelente"
)

