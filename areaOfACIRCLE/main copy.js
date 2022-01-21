const nums = [2,7,11,15], target = 9


const twoSum = (nums, target) => {
    let indice = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] + ++nums[1] === target){
            indice.push(nums[i])
        }
    }
    return indice
}

console.log(twoSum(nums, target))