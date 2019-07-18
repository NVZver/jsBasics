/* @Decorators

*/

function deco(target) {
    target.newFn = function () {
        console.log('deco');
    }
}

@deco
class Test() {}

const test = new Test();

test.newFn();