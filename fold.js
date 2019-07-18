var list1 = [1, 4, 7];
var list2 = [123, -2, 477, 3, 14, 6551];


function fold(input) {

    let result = [];

    if (input.length === 1) {
        return input;
    }
    if (input.length > 1) {
        const firstItem = input[0];
        result = fold(input.slice(1).map(item => item += firstItem));
    }
    return result;
}

var result1 = fold(list1);
console.log(result1);

var result2 = fold(list2);
console.log(result2);