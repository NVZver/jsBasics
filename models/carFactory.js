const Car = require('./car.js');

module.exports = function carFactory(mark, type){
  return new Car(mark, type);
}
