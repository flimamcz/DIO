const input = document.getElementById('nameTask');
const task = document.querySelector('.task')

function handleTask(event){
    event.preventDefault(); 
    const inputValue = input.value;
    addTask(inputValue)
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

    taskContainer.classList.add('task-item')
    taskContainer.appendChild(newTask)
    taskContainer.appendChild(taskLabel)
    task.appendChild(taskContainer)
}

btnAddTask.addEventListener('click', handleTask)
const img = document.querySelector('img[src*="assets/img"]')
const btn = document.querySelector('.alternateMode')

function changeMode(){
    document.body.classList.add('active')
    img.setAttribute('src', 'assets/img/mode-light.svg')
}

function changeLight(){
    document.body.classList.remove('active')
    img.setAttribute('src', 'assets/img/mode-dark.svg')
}

btn.addEventListener('click', changeMode)
btn.addEventListener('dblclick', changeLight)
