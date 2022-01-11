let acountNumber = 0
btnSubtrai.disabled = true

const CRONOMETER = {
    decrement(){
        acountNumber -= 1
        currentNumber.innerHTML = acountNumber
    },

    increment(){
        acountNumber += 1
        currentNumber.innerHTML = acountNumber
    },
}
