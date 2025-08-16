// ternario 
/*const hora = 18;
const vd = 100;
console.log(
    "Esta de",
    hora >= 0 && hora < 6 ? "Madrugada" :
    hora >= 6 && hora < 12 ? "dia" :
    hora >= 12 && hora < 18 ? "Tarde" :
    "Noite" 
);
console.log (
    "Sua Saude é",
    vd >= 0 && vd < 10 ? "Pessima" :
    vd >= 10 && vd < 30 ? "Ruim" :
    vd >= 30 && vd < 60 ? "Boa" :
    vd >= 60 && vd < 90 ? "Ótima" :
    "Exelente"
);*/

// Strutura condicional 
// if (expressão){}
/*const sideA = 4;
const sideB = 4;
const sideC = 4;
if (sideA === sideB && sideB === sideC){
    console.log("O triangulo é equilátero")
} else if (sideA === sideB || sideA === sideC || sideB === sideC){
    console.log("O triangulo é isóceles")
}else {
    console.log("O triangulo é escaleno")
};*/

// Input de usuario
/*const rl = require ("node:readline");
const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})*/

/*prompt.question("Digite sua idade:",answer => {
    const age = Number.parseInt(answer);
    if (Number.isNaN(age)){
        console.log("O que você digitou não é um numero valido!")
    }else {
        console.log (`Sua idade é ${age}`);
        console.log(`Daqui a 4 anos você vai te ${age + 4} anos`);
        console.log(`Daqui a 10 anos você vai te ${age + 10} anos`);
        console.log(`Daqui a 15 anos você vai te ${age + 15} anos`);
        console.log(`Daqui a 20 anos você vai te ${age + 20} anos`);
    };
    prompt.close();
});

let bank = 3000;
console.log(`Valor total do Banco é de ${bank}`);
prompt.question("Digite o valor que deseja trasferir:",answer => {
    const amount = Number.parseInt (answer);
    if (Number.isNaN(amount)){
        console.log("O numero não é valido");
    }else if (amount > bank){
        console.log("Maior que o total");
    }else if (amount <= 0){
        console.log("Valor tem que ser possitivo");
    }else {
        bank -= amount
        console.log (`Você trasferiu ${amount} Reais`)
        console.log (`Seu Saldo é de ${bank} Reais`)
    }
    prompt.close()
})*/

const statust = "bom";
const salario = 2000;
let bonus = 0;

if (statust === "otimo"){
    bonus = salario * 0.3
}else if(statust === "bom"){
    bonus = salario * 0.2
}else {
    console.log ("Não bateu a meta")
}
console.log(`Bónus calculado: $${bonus.toFixed(2)} Reais`)




