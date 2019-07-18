// A Basic Class Expressions
let PersonClass1 = class {
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}

class PersonClass2 {
    constructor(name){
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

// In fact a class looks like the following function
function PersonClass3(name){
    this.name = name;
}

PersonClass3.prototype.sayName = function(){
    console.log(this.name);
}
