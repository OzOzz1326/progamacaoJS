let prompt = require("prompt-sync")()

let data_atual = parseInt( prompt("Digite a data atual: "))
let data_nascimento = parseInt( prompt("Digite quando você nasceu: "))
let idade = data_atual - data_nascimento

console.log("Você tem "+idade+" anos\n")

let nota1 = parseInt(prompt("Nota 1 = "))
let nota2 = parseInt(prompt("Nota 2 = "))
let nota3 = parseInt(prompt("Nota 3 = "))
let media = (nota1 + nota2 + nota3) / 3

console.log("Sua média é: "+media+"\n")

let nome = ("botas")
let preco = parseInt(prompt("Preço: "))
let estoque = parseInt(prompt("Estoque: "))
let total = estoque * preco

console.log("Caso o vendedor venda todos as "+nome+" ele faturará: "+total+"\n")