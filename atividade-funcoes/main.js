function calcAge(age){
    return `Daqui há ${age} anos, ${this.nome} terá ${this.idade + age} Anos idade`
}

const people = {
    nome: 'Filipe',
    idade: 20
}
console.log(calcAge.call(people, 10))

