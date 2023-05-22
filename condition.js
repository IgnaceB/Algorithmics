console.log("Tarif-réduit")
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

console.log("plus grand")
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
console.log("dés")

let dice = 10000
let value = [1, 2, 3, 4, 5, 6]
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

console.log(whoisbigpropre((whoissame(roll(dice, value)))));
console.log("Day")

let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let daynr = 26;
let firstday =1;

function Dayofweek(daynr, firstday) {
    let weeknr = Math.floor((daynr) / 7);
    let weekdays = weeknr * 7;
    if (firstday > (daynr - weekdays)) {
        return (daynr - weekdays - firstday + 7)
    }
    else {
        return ((daynr - weekdays - firstday));
    }
};

trueday = Dayofweek(daynr, firstday);
console.log(trueday);

function day(trueday) {
    switch (trueday) {
        case (1): console.log("Monday");
            break;
        case (2): console.log("Tuesday");
            break;
        case (3): console.log("Wednesday");
            break;
        case (4): console.log("Thursday");
            break;
        case (5): console.log("Friday");
            break;
        case (6): console.log("Saturday");
            break;
        case (0): console.log("Sunday");
            break;

    }
};

day(Dayofweek(daynr, firstday));

console.log("printery")
let price=[0.1,0.11,0.12]
let qty=0

function total(price,qty) {
    if (qty<10){
        return price[2]*qty;
    }
    else if (qty<20){
        return price[1]*qty;
    }
    else {
        return qty*price[0];
    }
};
console.log(total(price,15));

