function multiply(a, b){
    return a * b;
} 

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(2));
console.log(triple(2));
