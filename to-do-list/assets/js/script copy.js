const input = document.getElementById('nameTask');
const label = document.querySelector('.checkbox')

function handleTask(event){
    event.preventDefault()
    const inputValue = input.value

    const labelCreated = document.createElement('label')
    const checkboxCreate = `<input type="checkbox" name="task" id="task">`
    labelCreated.innerText = inputValue

    const elements = label.innerHTML = checkboxCreate + label.appendChild(labelCreated).innerHTML

    const div = document.createElement('div')
    div.innerHTML = elements
}

btnAddTask.addEventListener('click', handleTask )