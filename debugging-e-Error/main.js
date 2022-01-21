function receiveArrNum(array, number){
    try{
        if(!array || !number) throw new ReferenceError('Envie os parametros')

        if(typeof array != 'object') throw new TypeError('Array precisa ser um objeto')

        if(typeof number != 'number') throw new TypeError('Number precisa ser um numero')
        
        if(array.length != number) throw new RangeError('Tamanho diverge do outro')

        return array

    } catch(e){
        if(e instanceof RangeError){
            e.name = 'Incorrect Size'
            console.log(e.stack)
        } else if(e instanceof ReferenceError){
            e.name = 'Erro de referencia'
            console.log('ReferenceError!')
            console.log(e.stack)
        } else if(e instanceof TypeError){
            e.name = 'Erro de tipo'
            console.log(e.stack)
        } else{
            console.log("Erro não esperado: " + e)
        }
    
    }
}

receiveArrNum([421653412], 32)
