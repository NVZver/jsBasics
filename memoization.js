function fibonacciBasic(n) {
    return n < 2 ? n : fibonacciBasic(n-1) + fibonacciBasic(n-2);
}

function factorialBasic(n) {
    return n > 0 ? n * factorialBasic(n-1) : 1;
}

function fibonacciMemoCreator(){
    const memo = { 0: 0, 1: 1};

    return function(n){
        if(typeof memo[n] !== 'number'){
           memo[n] = fibonacci(n); 
        }
        return memo[n];
    }
}

// ===== True way

function memoizer(memo, formula) {
    return function recursive(n){
	if(typeof memo[n] !== 'number'){
            memo[n] = formula(n);
        }
        return memo[n];
    }
} 

const fibonacciMemo = memoizer([0, 1], fibonacciBasic);
const factorialMemo = memoizer([1, 1], factorialBasic);

for(let i = 0; i < 11; i++){
    console.log(`fibonacci from ${i} is ${fibonacciMemo(i)}`);
    console.log(`factorial from ${i} is ${factorialMemo(i)}`);
}

