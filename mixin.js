const SerializableMixin = {
    serialize(){
        return JSON.stringify(this);
    }
};

const AreaMixin = {
    getArea() {
        return this.length * this.width;
    }
};

function mixin(...mixins) {
    const base = function(){};
    Object.assign(base.prototype, ...mixins);
    return base;
}

class Square extends mixin(AreaMixin, SerializableMixin) {
    constructor(length) {
        super();
        this.length = length;
        this.width = length;
    }
}

const square = new Square(3);
console.log(square.getArea());
console.log(square.serialize());
