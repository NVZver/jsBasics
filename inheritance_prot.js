function Animal(name, age){
    this.name = name;
    this.age = age;
    this.wakeUp = function(){
        console.log('I do not want to get up!!');
        this.getSleep();
    }
    
    this.getSleep = function(){
        console.log('All right, it is time...');
    }

}

Animal.prototype.makeSomeNoise = function(){
    console.log('I can not make any noise');
}

function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.wakeUp = function(){console.log('no...');}
}

Cat.prototype = new Animal();
Cat.prototype.makeSomeNoise = function(){
    Object.getPrototypeOf(this).makeSomeNoise();
    console.log('somebody stop me!!! Mey!');
}

//const animal = new Animal('Rabbit', 0);
//animal.wakeUp();
//animal.makeSomeNoise();

const cat = new Cat('Marsel', 5);
console.log(cat);
cat.getSleep();
cat.wakeUp();
cat.makeSomeNoise();
