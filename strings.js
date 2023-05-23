let string1 = "1,2,3,"
let string2 = "3 petits chats"
let string3 = "Trois mignons petits fripons"
let string4 = "Doe, John"

// concat 2 strings

const concat = (x, y) => {
    return x + " " + y
}
console.log(concat(string1, string2))

// Lowercase un charactere

const smalltext = (string) => {
    return string.toLowerCase()
}

console.log(smalltext(string3))

// Upercase 1 string

const bigtext = (string) => {
    return string.toUpperCase()
}
console.log(bigtext(string2))

// Reverso John-> DOE

const reversotext = (string) => {
    let where = string.indexOf(",")
    slice1 = string.slice(0, where)
    slice2 = string.slice(where + 2)
    return slice2 + " " + slice1
}

console.log(reversotext(string4))

// space into atmosphere

const espace = (string) => {
    let position = new Array
    let compo = new Array
    let a = 0
    let full=""
    for (let i = -1; i < string.length; i = position[a - 1]) {
        if (string.indexOf(" ", i + 1)<0) { break }
        else {
            position[a] = string.indexOf(" ", i + 1)
            a++
            console.log(position)
        }
    for (let i=0;i<string.length;i++){
        compo[i]=string[i]
    }
    console.log(compo)
    for (let i=0;i<position.length;i++){
        compo.splice(position[i]-i,1)
    }
    console.log(compo)
    for (let i=0;i<compo.length;i++){
        full=full+compo[i]
    }
    return full
}
}
console.log(espace(string3))