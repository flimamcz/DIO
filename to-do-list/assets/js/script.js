const input = document.getElementById('nameTask');
const task = document.querySelector('.task')

function handleTask(event){
    event.preventDefault(); 
    const inputValue = input.value;
    addTask(inputValue)
    input.reset()
}

function addTask(description){
    const taskContainer = document.createElement('div')
    const newTask = document.createElement('input')
    const taskLabel = document.createElement('label')
    const taskDescriptionNode = document.createTextNode(description)

    newTask.setAttribute('type', 'checkbox')
    newTask.setAttribute('name', description)
    newTask.setAttribute('id', description)

    taskLabel.setAttribute('for', description)
    taskLabel.appendChild(taskDescriptionNode)
}

btnAddTask.addEventListener('click', handleTask)