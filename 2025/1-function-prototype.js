const Cat = function (name) {
    this.name = name;
}

Cat.prototype.sayHi = function(){
    console.log(`Hi! I am ${this.name}`);
}

const marcel = new Cat("Marcel");
marcel.sayHi();
