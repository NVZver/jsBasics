function sayHi(name){
    console.log(`Hi ${name}`);
}

sayHi('Jack!');

function Animal(name, age){
    this.name = name;
    this.age = age;
    this.isSleep = false;
}

function Cat(name){
    Animal.apply(this, arguments);
    this.sayMey = function(){console.log('Mey')}
}

const myCat = new Cat('Marsel', 5);
console.log(myCat);
