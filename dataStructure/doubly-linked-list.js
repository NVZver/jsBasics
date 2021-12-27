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
}

const list = new DoublyLinkedListNode();