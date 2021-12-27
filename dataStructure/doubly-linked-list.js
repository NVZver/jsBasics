class Node {
  constructor(value){
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }

}

class DoublyLinkedListNode {
  constructor(){
    this.head = undefined;
    this.tail = undefined;
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
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = undefined;
      popedNode.prev = undefined;
    }

    this.length--;

    return popedNode;
  }
}

const list = new DoublyLinkedListNode();

list.push('first').push('second').push('third');

console.log('List: ', list);

console.log('Pop: ', list.pop(), list)