class Node {
  constructor(value){
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }

}

class DoublyLinkedListNode {
  constructor(){
    this._resetPointers();
    this.length = 0;
  }

  push(value){

    const node = new Node(value);

    if(this.length === 0){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop(){
    if(this.length === 0) return undefined;

    const popedNode = this.tail;

    if(this.length === 1) {
      this._resetPointers();
    } else {
      this.tail = this.tail.prev;
      this.tail.next = undefined;
      popedNode.prev = undefined;
    }

    this.length--;

    return popedNode;
  }

  shift(){
    if(this.length === 0) return undefined;

    const shiftedNode = this.head;

    if(this.length === 1){
      this._resetPointers();
    } else {
      this.head = this.head.next;
      this.head.prev = undefined;
      shiftedNode.next = undefined;
    }

    this.length--;

    return shiftedNode;
  }

  unshift(value){
    const node = new Node(value);

    if(this.length === 0){
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
    }

    this.head = node;

    this.length++;

    return this;
  }

  get(id) {
    if(id === 0) return this.head;
    if(id === this.length - 1) return this.tail;
    if(id < 0 || id >= this.length) return undefined;

    const middle = Math.round(this.length/2);

    return (id <= middle)
      ? this._getFromStart(id)
      : this._getFromEnd(id);
  }

  _getFromStart(id){
    let current = 0;
    let result = this.head;

    while(current !== id){
      result = result.next;
      current++;
    }

    return result;
  }

  _getFromEnd(id){
    let current = this.length-1;
    let result = this.tail;

    while(current !== id){
      result = result.prev;
      current--;
    }

    return result;
  }

  _resetPointers(){
    this.head = undefined;
    this.tail = undefined;
  }
}

const list = new DoublyLinkedListNode();

// list.push('first').push('second').unshift('zero').push('third');

for(let i=0; i < 10; i++){
  list.push(i);
}

console.log(list)


console.log(list.get(0).value);
console.log(list.get(3).value);
console.log(list.get(5).value);
console.log(list.get(7).value);
console.log(list.get(9).value)
console.log(list.get(10));

// console.log('Pop: ', list.pop(), list)
// console.log('Shift: ', list.shift(), list)