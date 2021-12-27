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

  _resetPointers(){
    this.head = undefined;
    this.tail = undefined;
  }
}

const list = new DoublyLinkedListNode();

list.push('first').push('second').unshift('zero').push('third');

console.log('List: ', list);

// console.log('Pop: ', list.pop(), list)
// console.log('Shift: ', list.shift(), list)