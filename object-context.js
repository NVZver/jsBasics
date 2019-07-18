// ================= this may be different 1
var user = {
    name: 'Jack',
    hi: function () {
        console.log(this.name)
    },
    bye: function () {
        console.log('Bye');
    }
};

// user.hi();
// (user.name === 'Jack' ? user.hi : user.bye)()

// ================= this may be different 2
var a = ['Hi Jack!', 2];
a.push(function () {
    console.log(this[0]);
})
// a[2]();

// ================= this may be different 2
var obj = {
    name: 'Jack',
    go: function () {
        console.log(`GO! ${this.name}`)
    }
};

// (obj.go)()

// this of an object is the window object
var obj = {
    name: 'Jimm',
    export: this
};
// console.log(obj.export.this);

// =================== this for a chain
var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        console.log(this.step);
    }
};

ladder.up().up().down().up().down().showStep();