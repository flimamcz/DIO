//MAP => const myMap = new Map()

//Estrutura 

// Características:

/*
- Uma coleção de arrays no formato [chave, valor]
- Pode ser iterado por um loop for....of
*/

//Coleções chaveadas > Métodos

/*
- adicionar
- Ler
- Deletar
*/

const myMap = new Map()
myMap.set('apple', 'Fruit')
myMap.set('cell', 'android')
console.log(myMap)

myMap.get('apple')
console.log(myMap.get('apple'))

myMap.delete('apple')
console.log(myMap.delete('apple'))

