let originalValues = [1,2,3,4,5]
let newValue = originalValues.map(x => x + 1) // Map reciba un arrow function como callback
let otherValues = originalValues.map(x => x * 2)
let moreValues = originalValues.map(x => 'a')


// console.log(`Original values ${originalValues}, newValues ${newValue}, otherValues ${otherValues}, moreValues ${moreValues}`)

const callbackFunction = (value) => {
    if(value % 2 === 0) {
        return `El numero que escojiste es ${value}, es un numero par`
    } else {
        return 'No es par'
    }
}

const evaluatePair = originalValues.map(callbackFunction)
console.log(evaluatePair);