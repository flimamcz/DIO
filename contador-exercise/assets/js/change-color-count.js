let acountNumber = 0
const CRONOMETER = {
    decrement(){
        acountNumber -= 1
        currentNumber.innerHTML = acountNumber

        if(acountNumber < 0){
            currentNumber.style.color = 'red'
        } else{
            currentNumber.style.color = 'black'
        }
    },

    increment(){
        acountNumber += 1
        currentNumber.innerHTML = acountNumber
        if(acountNumber > 0){
            currentNumber.style.color = 'green'
        } else{
            currentNumber.style.color = 'black'
        }
    }
}