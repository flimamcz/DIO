const APP = {
    receiveNumber(n1, n2){

        const soma = n1 + n2
        let textSoma = `Sua soma é ${soma}`
        let iguais = ``
        let textMaiorMenor = ''

        if(n1 === n2){
            iguais = `Os numeros ${n1} e ${n2} são iguais.`
        } else{
            iguais = `Os numeros ${n1} e ${n2} não são iguais.`
        }

        if(soma > 10 && soma < 20){
            textMaiorMenor = 'que é maior que 10 e menor que 20.'
        } else if(soma < 10){
            textMaiorMenor = 'que é Menor que 10'
        } else if(soma >= 20){
            textMaiorMenor = 'que é Maior/Igual a 20'
        }

        console.log(`${iguais} ${textSoma} ${textMaiorMenor} `)
    },

}

APP.receiveNumber(12, 1)