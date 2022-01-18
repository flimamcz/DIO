function multiplicaPor2(arr){
    let multiplicados = []

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados
}


const meusNumeros = [2, 4, 12, 22, 90]

console.log(multiplicaPor2(meusNumeros))