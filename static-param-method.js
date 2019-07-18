function Article() {
    Article.count++;

    //...
}
Article.count = 0;

Article.showCount = function () {
    console.log(this.count); // (1)
}

// использование
new Article();
new Article();
Article.showCount(); // (2)

function testJoin() {
    arguments.join = [].join;
    console.log(arguments.join('.'));
}

// testJoin(1, 2, 3);

// ========================
function sumArgs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function (a, b) {
        return a + b;
    })
}

// console.log(sumArgs(1, 2, 3));

// ===========================
function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

function applyAll() {
    if (arguments.length) {
        if (arguments[0] instanceof Function) {
            return arguments[0].apply(this, [].splice.call(arguments, 1));
        }
    }
}

console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24