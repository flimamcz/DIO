function finMax(){
    let max = -Infinity

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }

    return max
}

function showArguments(){
    return arguments
}

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3]


function conferLength(...args){
    console.log(args)
}


const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'john',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`
}

console.log(getFullName(user))