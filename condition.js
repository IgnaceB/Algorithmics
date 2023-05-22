let full = 10;
let red = 8;
let tar = "tred";

function tarif() {
    if (tar = "tred") {
        console.log(red)
    } else {
        console.log(full)
    }
};

tarif();

let tab = [3, 5, 6, 2, 1, 9, 10, 25];


function whoisbig(tab) {
    let max = 0;

    for (let i = 0; i <= tab.length; i++) {
        if (max < tab[i] && i == tab.length - 1) {
            max = tab[i];
            console.log(max);
            break;
        }
        else if (max < tab[i] && i != tab.length - 1) {
            max = tab[i];
        }
        else if (max >= tab[i] && i == tab.length - 1) {
            console.log(max);
            break;
        }
    }
};

//whoisbig(tab);

function whoisbigpropre(tab) {
    let max = 0;
    for (let i = 0; i < tab.length; i++) {
        if (max < tab[i]) {
            max = tab[i];
        }
    }
    return (max)
};
console.log(whoisbigpropre(tab));

let dice = 10000
let value = [1, 2, 3,4,5,6]
function roll(dice, tab) {
    let values = new Array();
    for (let i = 0; i < dice; i++) {
        values[i] = value[Math.floor(Math.random() * tab.length)];
    }
    return values;
}

//console.log(roll(dice,value));

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

console.log(whoisbigpropre((whoissame(roll(dice, value)))));