/**
 * Iterators and Generators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
 */

/**
 * Range iterator
 */
function makeRangeIterator(start=0, end=Infinity, step=1){
  let nextIndex = start;
  let iterationCount = 0;
  const rangeIterator = {
    next: function(){
      let result;
      if(nextIndex < end){
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    }
  };

  return rangeIterator;
}

const myIterator =  makeRangeIterator(0, 10, 2);

let result = myIterator.next();
while(!result.done){
  console.log('result: ', result);
  result = myIterator.next();
}

console.log(`Iteration is over; Iterations count: ${result.value}`);
