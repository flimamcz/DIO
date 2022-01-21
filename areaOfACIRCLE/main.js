function simpleArraySum(array){
    let sum = 0

    for(let i = 0; i < array.length; i++){
         sum += array[i]
    }
    
    return sum
}
const nums = [20, 30, 40, 50]

simpleArraySum(nums)