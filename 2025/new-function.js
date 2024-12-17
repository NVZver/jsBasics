/**
 * When a function is called with "new" prefix, an Object
 * with a prototype property is created and returned;
 */
function Animal(legsNum) {
  this.legsNum = legsNum;
}
Animal.prototype = { age: 0 };

const animal = new Animal(4);
console.log(animal, animal.age);
/**
 * A constructor function (which is invoced with "new") always returns an object.
 * Even if the return value is not an object.
 */
function Cat(name) {
  this.name = name;
  return 1;
}
Cat.prototype = new Animal(4);

const cat = new Cat("Marcel");

console.log(cat, { name: cat.name, age: cat.age, legs: cat.legsNum }); // Cat { name: 'Marcel' } Marcel
// -----------------------------------------------------------

/**
 * But if the function returns an object,
 * the object will override the one which would be returned on "new"
 */
function Dog(name) {
  this.name = name;
  return { color: "white" };
}
const dog = new Dog("Jack");
console.log(dog, dog.name); // { color: 'white' } undefined
//------------------------------------------------------------
