// INPUT
let prompt = require("prompt-sync")()

let nome = prompt ("Olá, digite o seu nome: ")
let sobrenome = prompt ("Sobrenome: ")
let idade = prompt ("Digite sua idade: ")
console.log ("Seja bem-vindo "+nome+" "+sobrenome+" você tem "+idade+" anos XD")

console.log("\n\n")

let produto1 = prompt ("Digite o nome de um produto: ")
let preco1 = prompt ("Digite o preço de "+produto1+": ")
let produto2 = prompt ("Digite o nome de um outro produto: ")
let preco2 = prompt ("Digite o preço de "+produto2+": ")
console.log("----- RELATÓRIO -----")
console.log(produto1+" - "+preco1)
console.log(produto2+" - "+preco2)