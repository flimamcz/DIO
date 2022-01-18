const BASE_OBJ = {
    id: 1,
    baseName: 'Names',
    baseUsers: {
        name: 'Filipe',
        age: 23
    }
}

function selectUser({baseUsers: {name: UserName, age: UserAge}}){
    return `${UserName} ${UserAge}`
}

console.log(selectUser(BASE_OBJ))