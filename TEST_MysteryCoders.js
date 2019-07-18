/**
 
 */
const input = '3';
const result = [];

for (let i = 0; i < +input; i++) {
    console.log('try: ', i, 'to: ', +input, 'and: ', i.toString(+input));
    console.log(parseInt(i, +input))
    result.push((i >>> 0).toString(+input));
}
console.log(result);