/**
 * Iterables
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
 */

function* makeIterator(){
  yield 1;
  yield 2;
}

//let myIterator = makeIterator();
//
//for(const item of myIterator){
//  console.log(item);
//}

const myIterable = {};
myIterable[Symbol.iterator] = function* (){
  for(let i =0; i<5; i++){
    yield i;
  }
}

console.log([...myIterable]);
