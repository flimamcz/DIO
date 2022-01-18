function students(array){
    let newArray = []
    let studentsReproved = []
    for(let i = 0; i < array.length; i++){
        if(array[i].nota >= 6){
            newArray.push(array[i])
        }
        if(array[i].nota < 6){
            studentsReproved.push(array[i])
        }
    }
    
    console.log('Alunos Aprovados \n')
    console.log(newArray)
    console.log('\n')
    console.log('Alunos Reprovados \n')
    console.log(studentsReproved)
}
const alunos = [{aluno: 'Filipe', nota: 9}, {aluno: 'Marta', nota: 23}, {aluno: 'Marcos', nota: 6}, {aluno: 'Laura', nota: 4}]

students(alunos)