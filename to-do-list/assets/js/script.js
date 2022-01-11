const input = document.getElementById('nameTask');
const labelCheckBox = document.querySelector('.checkbox')

function handleTask(event){
    event.preventDefault(); 
}

const addAndDelete = {
    add(){
        const inputValue = input.value;
        const labelCreated = document.createElement('label')
        labelCreated.innerText = inputValue
        labelCheckBox.appendChild(labelCreated)

        const inputCheckBox = `<input type="checkbox">`
        labelCheckBox.insertAdjacentHTML('afterbegin', inputCheckBox)
        
    },

    delete(){

    },
}

btnAddTask.addEventListener('click', handleTask)