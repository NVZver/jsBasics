class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = undefined;
    this.tail = undefined;
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
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push('first');
singlyLinkedList.push('second');

console.log(singlyLinkedList);