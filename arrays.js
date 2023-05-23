// print everything in array

let nouveau = 2

let arrayreceiver = new Array

const newpush = (arrayreceiver, nouveau) => {
    arrayreceiver.push(nouveau)
    return arrayreceiver
}

arrayreceiver = newpush(arrayreceiver, nouveau)
console.log(arrayreceiver)

// max on array + min on array + position

let arraymax = [1, 2, 3, 4, 5, 8, 1, 2]

const checkmax = (arraymax) => {
    let max = 0
    let min = arraymax[0]
    for (let i = arraymax.length - 1; i >= 0; i--) {
        if (max < arraymax[i]) {
            max = arraymax[i]
        }
        else if (min > arraymax[i]) {
            min = arraymax[i]
        }

    }
    return [max, min]
}

console.log("maximum " + checkmax(arraymax)[0] + " minimum " + checkmax(arraymax)[1] + " index nr" + arraymax.indexOf(checkmax(arraymax)[1]))


// check si croissant

const checkisboulanger = (arraymax) => {
    for (let i = 1; i < arraymax.length; i++) {
        if (arraymax[i] > arraymax[i-1]) {
        }
        else {
            return "chocolatine"
        }
    }
    return "croissant"
}
console.log(checkisboulanger(arraymax))