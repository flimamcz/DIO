// Erro com return

// function isPalindromo(string){
//     if(!string) return 'String Inválida'

//     return string === string.split('').reverse().join('');
// }

// console.log(isPalindromo(''))

// function isPalindromo(string){
//     if(!string) throw 'String Inválida'

//     return string === string.split('').reverse().join('');
// }

// console.log(isPalindromo('ana'))


function isPalindromo(string){
    if(!string) throw 'String Invalida'

    return string === string.split('').reverse().join('');
}

function tryCatchExample(string){
    try {
        isPalindromo(string) // Callback chamando a funcao acima
    } catch (error) {
        throw error
    } finally{
        console.log('A String enviada foi: ' + string)
    }
}


tryCatchExample('')