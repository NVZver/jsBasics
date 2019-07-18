const numArr1 = [1, 2, 3, 4, 5];
const numArr1Result = [1, 3, 6, 10, 15];
const numArr2 = [-2, -1, 0, 1];
const numArr2Result = [-2, -3, -3, -2];

function getSums(arr) {
    const result = arr;
    result.forEach((item, index) => {
        if (index + 1 < result.length) {
            result[index + 1] += item;
        }
    })
    return result;
}

//console.log(getSums(numArr1), `should be ${numArr1Result}`);
//console.log(getSums(numArr2), `should be ${numArr2Result}`);
const testArr = [];
testArr[10] = 'cool!';
console.log(testArr);
console.log(testArr.length);