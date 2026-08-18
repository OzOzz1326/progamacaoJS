/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/
console.log(" _____")
console.log("|     |")
console.log("|     |")
console.log("|     |")
console.log("|_____|")


/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/
let cidade = "Santa Catapimbas da Serra"
let estado = "São Paulo"
console.log("Eu moro em "+cidade+" - " +estado+ "\n")

/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/
let numero1 = 13
let numero2 = 26
let soma = numero1 + numero2

console.log(soma+"\n")

/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/
let idade = 20
let idade_soma = idade + 10

console.log("Olá, você tem "+idade+" anos e daqui a 10 anos terá "+idade_soma+"\n")

/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/
let numero = 13
let dobro = numero * 2
let triplo = numero * 3

console.log("Número: "+numero+". Dobro: "+dobro+". Triplo: "+triplo+"\n")

/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/
let nome1 = "Camisa"
let valor1 = 52
let nome2 = "Bota"
let valor2 = 65
let soma_valores = valor1 + valor2

console.log("A "+nome1+" está R$"+valor1+".\n"+"A "+nome2+" está R$"+valor2+".\n"+"A soma dos dois produtos é: R$"+soma_valores+"\n")

/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/
let salario = 2500
let aumento = 500
let inss = 250
let novo_salario = salario + aumento - inss

console.log("O salário atual é de: R$"+salario+". \n"+"O novo salário será de: R$"+novo_salario+"\n")

/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/
let mesada = 100
let gasto = 35
let total = mesada - gasto

console.log("Mesada: "+mesada+" Gasto: "+gasto+" Total: "+total+"\n")

/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/
let base = 13
let altura = 26 
let area = base * altura

console.log("Base = "+base+". Altura = "+altura+". Area = "+area+".\n")

/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/
let celsius = 26
let fahrenheit = celsius * 1.8 + 32
let kelvin = celsius + 273.15

console.log("Temperatura em Celsius = "+celsius+"°C. Tempreratura em Fahrenheit = "+fahrenheit+"°F. Temperatura em Kelvin = "+kelvin+"°K. \n")

/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/
let hora = 13
let minuto = hora * 60
let segundo = hora * 3600

console.log("Hora = "+hora+". Minutos = "+minuto+". Segundos = "+segundo+". \n")

/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/
let tipo1 = 13
let tipo2 = 26
let troca = tipo1

console.log("variavel tipo1 é "+tipo1+" e a variavel tipo2 é "+tipo2)

tipo1 = tipo2
tipo2 = troca

console.log("variavel tipo1 é "+tipo1+" e a variavel tipo2 é "+tipo2+"\n")

/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/
let distancia = 130 
let litros = 50
let litros_gastos = 13
let preco = 6
let total_gasto = litros * preco

console.log("Distância percorrida = "+distancia+". Litros comprados = "+litros+"L. Litros consumidos = "+litros_gastos+"L. Preço total = R$"+total_gasto+". \n")

