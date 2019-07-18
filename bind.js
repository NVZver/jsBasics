function bind(func, context) {
    return function () { // (*)
        return func.apply(context, arguments);
    };
}

function bind1(cb, context) {
    return function () {
        return
    }
}

function f() {
    console.log(this);
}

var g = bind(f, "Context");
g(1, 2, 3);

console.log('test TDZ: ', typeof value);
if(true){
    const value = "blue";
}