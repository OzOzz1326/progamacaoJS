let prompt = require("prompt-sync")()

console.log("=========================================")
console.log("CADASTRO DE PREÇOS - CONRADITO DOGUEZITO")
console.log("=========================================")

let item1 = "pão"
let item2 = "salsicha"
let item3 = "purê de batata"
let item4 = "queijo"
let item5 = "bacon"

let custo1 = parseFloat(prompt("Digite o preço do "+item1+": R$"))
let custo2 = parseFloat(prompt("Digite o preço do "+item2+": R$"))
let custo3 = parseFloat(prompt("Digite o preço do "+item3+": R$"))
let custo4 = parseFloat(prompt("Digite o preço do "+item4+": R$"))
let custo5 = parseFloat(prompt("Digite o preço do "+item5+": R$"))
let acrescimo = parseFloat(prompt("Digite a porcentagem de lucro desejada: "))
acrescimo = acrescimo * 100

let valor_com_acrescimo1 = "teste"

let preco_custo_cachorro_pure = custo1+custo3+custo5+custo2
let preco_venda_cachorro_pure = custo1+custo3+custo5+custo2+acrescimo
let preco_custo_cachorro_cremoso = custo1+(custo2 *2)+custo4
let preco_venda_cachorro_cremoso = custo1+(custo2 *2)+custo4+acrescimo
let preco_custo_cachorro_especial = custo1+custo3+custo5+custo2
let preco_venda_cachorro_especial = custo1+custo3+custo5+custo2+acrescimo
 

console.log("\n")
console.log("\n")

console.log("============================")
console.log("CARDÁPIO CONRADITO DOGUEZITO")
console.log("============================")
console.log("Lucro aplicado: "+acrescimo+"%")

console.log("\n")

console.log("CACHORRO QUENTE COM PURÊ")
console.log("Ingredientes: "+item1+", "+item3+", "+item5+", "+item2)
console.log("Preço de custo: "+preco_custo_cachorro_pure)
console.log("Preço da venda: "+preco_venda_cachorro_pure)
console.log("--------------------------------------------------------")
console.log("\n")

console.log("CACHORRO QUENTE CREMOSO")
console.log("Ingredientes: "+item1+", "+item3+", "+item5+", "+item2)
console.log("Preço de custo: "+preco_custo_cachorro_cremoso)
console.log("Preço da venda: "+preco_venda_cachorro_cremoso)
console.log("--------------------------------------------------------")
console.log("\n")

console.log("CACHORRO QUENTE ESPECIAL")
console.log("Ingredientes: "+item1+", "+item3+", "+item5+", "+item2)
console.log("Preço de custo: "+preco_custo_cachorro_especial)
console.log("Preço da venda: "+preco_venda_cachorro_especial)
console.log("--------------------------------------------------------")
console.log("\n")