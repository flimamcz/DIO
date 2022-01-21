const myError = new Error('Mensagem Inválida')
// myError.name = 'String Vazia'
//stack = pilha - informa onde encontrou o erro
myError.stack
throw myError