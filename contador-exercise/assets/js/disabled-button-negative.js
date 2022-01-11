let acountNumber = 0
btnSubtrai.disabled = true

const CRONOMETER = {
    decrement(){
        acountNumber -= 1
        currentNumber.innerHTML = acountNumber

        if(acountNumber <= 0){
            btnSubtrai.disabled = true
        }
    },

    increment(){
        acountNumber += 1
        currentNumber.innerHTML = acountNumber

        if(acountNumber >= 0){
            btnSubtrai.disabled = false

        }
    },
}
