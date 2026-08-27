somarNumeros()
numeroPositivo()

//11funcoeseparametros
somar(5, 6)

//funções com retorno e parametros
function somar(n1, n2){
    let soma = n1+n2
    console.log(`A soma de ${n1} e de ${n2} é ${soma}`)
}

//funções vazias (void)    
function somarNumeros(){
    let n1 = 2
    let n2 = 3
    let soma = n1 + n2

    console.log(`A soma de ${n1} e ${n2} é: ${soma}`)
}
//------------------------------------------------------------------------------------
function numeroPositivo(){
    let n1 = 3
    let resposta = "negativo"

    if(n1 >= 0){
        resposta = "positivo"
    }

    console.log(`O número ${n1} é ${resposta}!`)
}