// arguments are coppies
console.log('I am going to change a string...');

function showMessage(from, text) {
    from = `[${from}]:`;
    console.log(`${from} ${text}`);
}

var from = "Jack";

showMessage(from, "Hello");

console.log(from);

// what about objects
console.log('Aha! it does not work with objects!');

function showObjects(obj) {
    // obj.name = `[it's a link!] ${obj.name}`;
    // obj.text = "Get out!"
    obj = {
        name: 'Jimm',
        text: 'get out...'
    };
    console.log(`[${obj.name}]: ${obj.text}`);
}

var obj = {
    name: "Jack",
    text: "Hello"
};
showObjects(obj);

console.log(`${obj.name}: ${obj.text}`);