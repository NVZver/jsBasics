/**
 * Generators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
 */

/**
 * Range iterator
 */
function* makeRangeIterator(start=0, end=Infinity, step=1){
  let iterationCount = 0;

  for(let i = 0; i<end; i+=step){
    yield i;
    iterationCount++;
  }

  return iterationCount;
}

const myIterator =  makeRangeIterator(0, 10, 2);

let result = myIterator.next();
while(!result.done){
  console.log('result: ', result);
  result = myIterator.next();
}

console.log(`Iteration is over; Iterations count: ${result.value}`);
