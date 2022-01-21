const arrayDuplicate = [11, 11, 2, 2, 53, 23, 53, 90, 90, 56, 78, 12]

function returnArrayClean(set){
    let arraySet = new Set(set)
    return [...arraySet]
}
console.log(returnArrayClean(arrayDuplicate))