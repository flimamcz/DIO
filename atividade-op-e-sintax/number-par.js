// let text = 'Lava esse a2val'
// let textSplit = text.split('').reverse().join('').toLowerCase()

// if(text.toLowerCase() === textSplit){
//     console.log('é um palindromo')
// } else{
//     console.log('não é um palindromo')
// }


let array = []
console.log(array)
function changePares(arr){
    if(array.length){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === 0){
                console.log('Você já é zero.')
            } else if(arr[i] != 0){
                console.log(`substituindo ${arr[i]} por 0....`)
                arr[i] = 0
            }
        }
        return arr
    } else {
        console.log(-1)
    }
}

console.log(changePares(array))