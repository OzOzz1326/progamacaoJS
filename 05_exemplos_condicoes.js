//exemplos condiçoes
let prompt = require("prompt-sync")()

let usuario = prompt("Digite o seu usuário: ")
if(usuario == "Caio"){
    console.log("Acesso concedido!")
} else{
    console.log("Acesso negado.")
}

let idade = parseInt(prompt("Digite sua idade: "))
if(idade > 99){
    console.log("Idade inválida! Tente novamente...")
} if(idade <= 0){
    console.log("Idade inválida! Tente novamente...")
}

console.log("A idade digitada foi: "+idade)