let array =[1,2,3,4,5]
const myFunctionMap = (array, callback) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        let newValue = callback(array[i]);
        newArray.push(newValue)
    }
    return newArray
}

let originalValues = [1,2,3,4,5]
let newValue = myFunctionMap(originalValues, x => x + 1) // Map reciba un arrow function como callback
let otherValues = myFunctionMap(originalValues, x => x * 2)
let moreValues = myFunctionMap(originalValues, x => 'a')


console.log(newValue, otherValues, moreValues);