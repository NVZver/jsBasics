// ======================== hoisting + closure
// sayHi('Jack');
var greetings = 'Hello!';

function sayHi(name) {
    console.log(`${name} ${greetings}`);
}

function JackHi() {
    var greetings = 'Hi';
    console.log(this);
    sayHi.bind(this)('Jack');
}

JackHi();

// =================== summ with closure
// console.log(sum(1)(2)); // 3

function sum(a) {
    return function (b) {
        return a + b;
    };
}

// =============== string buffer
function createBuffer() {
    var storage = '';
    var buffer = function () {
        if (arguments.length > 0) {
            for (key in arguments) {
                storage += ' ' + arguments[key];
            }
        } else {
            console.log(`returned value: ${storage}`);
            return storage;
        }
    }
    buffer.reset = function () {
        storage = '';
    }
    return buffer;
}

// var buffer = createBuffer();
// buffer('Java');
// buffer();
// buffer('Script');
// buffer();
// buffer('is', 'cool!');
// buffer();
// buffer.reset();
// buffer();

// =================== sorting
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

// users.sort(byField('name'));
// users.forEach(function (user) {console.log(user.name);}); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function (user) {console.log(user.name);}); // Masha, Vasya, Petya

// ======================== filtering
var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, cb) {
    return arr.filter(cb);
}

function inBetween(from, to) {
    return function (item) {
        return (item >= from && item <= to);
    }
}

function inArray(arr) {
    return function (item) {
        const idx = arr.findIndex(a => a === item);
        return (idx !== -1);
    }
}

// console.log(filter(arr, function (a) {return a % 2 == 0})); // 2,4,6

// console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6

// console.log(filter(arr, inArray([1, 2, 10]))); // 1,2

// =============== Functions Army
function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function () {
            console.log(`My nubmer is ${i}`);
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...

// <<<<<<<<<<<< Solution 1 >>>>>>>>>>>>>
function makeArmy1() {
    var shooters = [];
    var createSooter = function (number) {
        return function () {
            console.log(`my number is ${number}`);
        }
    }
    for (var i = 0; i < 10; i++) {
        shooters.push(createSooter(i));
    }
    return shooters;
}
army = makeArmy1();
army[0](); // стрелок выводит 0
army[5](); // стрелок выводит 5

// <<<<<<<<<<<<<< Solution 2 >>>>>>>>>>>>>>>>
function makeArmy1() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = (function (number) {
            return function () {
                console.log(`My nubmer is ${number}`);
            }
        })(i);
        shooters.push(shooter);
    }

    return shooters;
}
army = makeArmy1();
army[1](); // стрелок выводит 0
army[3](); // стрелок выводит 5