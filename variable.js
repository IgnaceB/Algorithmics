let x = 3; //float
let y = 2; //float (or int)

function plus(a, b) {
    console.log(a + b)
};

function division(a, b) {
    console.log(a / b)
};

function modulo(a, b) {
    console.log(a % b)
};
modulo(x, y);
division(x, y);
plus(x, y);

let z = "je suis "; //string
let w = "content"; //string

plus(z, w);

let htva = x; // float or int
let tva = 21; // float or int

function tvac(a, b) {
    console.log(a * (1 + (tva / 100)))
};
tvac(htva, tva);

function surface(a) {
    console.log(a ** 2 * (Math.PI))
};

surface(tva);

let time = [21, 59, 52]; // array
function midnight(a) {
    console.log((60 * 60 * 24) - (a[0] * 3600 + a[1] * 60 + a[2]))
};
midnight(time);