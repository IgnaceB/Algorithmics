// from n->1
let n = 10;
let type = "odd"; //growth, diminue, negat, odd

const countfromton = (n, type) => {
    let a = 0;
    switch (type) {
        case ("growth"): do {
            ++a
            console.log(a)
        } while (a < n)
            break
        case ("diminue"): do {
            console.log(n)
            n--

        } while (n > 0)
            break
        case ("negat"): a = -n
            do {
                console.log(a)
                a++
            } while (a < n + 1)
            break
        case ("odd"): a = 1
            do {
                if (a % 2 == 0) {
                    console.log(a)
                }
                a++
            } while (a < n)
            break

    }
}

countfromton(n, type)
//zerotorandom
let a = 50
const zerotorandom = (a) => {
    let x = 0
    let y = Math.floor(Math.random() * a)
    console.log("chiffre à atteindre " + y)
    do {
        console.log(x)
        x++
    }
    while (x < y)
}

zerotorandom(a)
//
let search = 10
let dice = 10000
let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function roll(dice, tab) {
    let values = new Array();
    for (let i = 0; i < dice; i++) {
        values[i] = value[Math.floor(Math.random() * tab.length)];
    }
    return values;
}


function whoissame(tab) {
    console.log(tab)
    let count = new Array(value.length + 1);
    for (let i = 0; i < tab.length; i++) {
        if (count[tab[i]] > 0) {

            count[tab[i]]++;
        }
        else {
            count[tab[i]] = 1;
        }
    }
    return count;
};



let b = whoissame(roll(dice, value))
console.log(b)
console.log(b[search] + " dés de valeur " + search)

// Even number

const printeven = (n) => {
    let a = 2
    do {
        console.log(a)
        a = a + 2
    }
    while (a < n)
}

printeven(n)

//perfect number

let q = 18

const perfectcheck = (q) => {
    let a = q
    let dividor = new Array()
    do {
        if (q % a == 0) {
            dividor.push(a)
            console.log(a)
        }
        else { console.log("marchepa") }
        a--
    }
    while (a > 0)
    console.log(dividor)
    let sum = 0
    for (let i = dividor.length-1; i >= 0; i--) {
        sum = sum + dividor[i]
        console.log(sum)
    }
    console.log(sum)
    if (sum == 2 * q) {
        return true
    }
    else {
        return false
    }
}

console.log(perfectcheck(q))


