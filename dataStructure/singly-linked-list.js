class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this._reset();
    this.length = 0;
  }

  push(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;

    let current = this.head;

    while(current.next && current.next.next){
      current = current.next;
    }

    const oldTail = current.next;

    current.next = undefined;
    this.tail = current;
    this.length--;

    if(this.length === 0){
      this._reset();
    }

    return oldTail;
  }

  shift(){
    if(this.length === 0) return undefined;

    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;

    if(this.length === 0) this._reset();

    return currentHead;
  }

  _reset(){
    this.head = undefined;
    this.tail = undefined;
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList
  .push('first')
  .push('second')
  .push('third');

console.log(singlyLinkedList);

// console.log('pop: ', singlyLinkedList.pop());
// console.log('pop: ', singlyLinkedList.pop());
// console.log('pop: ', singlyLinkedList.pop());

console.log('shift: ', singlyLinkedList.shift());
console.log('shift: ', singlyLinkedList.shift());
console.log('shift: ', singlyLinkedList.shift());

console.log(singlyLinkedList);