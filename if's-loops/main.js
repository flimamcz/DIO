//Método Call
//Usamos para adicionar contexto ao this.
//Podemos usar quando a funcao tem argumentos multiplos.


// const pessoa = {
//     nome: 'Miguel'
// }

// const animal = {
//     nome: "Murphy"
// }

// function getSomething(){
//     console.log(this.nome)
// }

// getSomething.call(animal)

//Apply
//Podemos usar quando a funcao tem argumentos multiplos.

// const myObj = {
//     num1: 2,
//     num2: 3
// }

// function soma(a, b){
//     console.log(this.num1 + this.num2 + a + b)
// }

// soma.call(myObj, 44, 6)

//APPLY É BEM PARECIDO COM O CALL, PORÉM PODEMOS PASSAR PARAMETROS PARA UMA FUNCAO ATRAVES DE ARRAY, ESSA É A DIFERENÇA ENTRE CALL E APPLY

// function soma(a, b){
//     console.log(this.num1 + this.num2 + a + b)
// }

// soma.call(myObj, [2, 3, 2])


//BIND > CLONA A ESTRUTURA DA FUNCAO ONDE É CHAMADA E APLICA O VALOR DO OBJETO PASSADO COMO PARAMETRO

function retornaNomes(){
    return this.nome;
}

let filipe = retornaNomes.bind({nome: 'Filipe'})
console.log(filipe())