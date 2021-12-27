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
}

const list = new DoublyLinkedListNode();

list.push('first').push('second').push('third');

console.log(list);