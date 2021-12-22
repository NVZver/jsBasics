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

  unshift(value){
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    if(this.length === 1) this.tail = this.head;
    return this;
  }

  get(id){
    if(id === this.length - 1) return this.tail;
    if(id < 0 || id >= this.length) return undefined;

    let current = this.head;
    let currentId = 0;
    while(currentId < id){
      current = current.next;
      currentId++;
    }

    return current;
  }

  set(id, value){
    const node = this.get(id);
    if(node){
      node.value = value;
      return node;
    }
    return undefined;
  }

  insert(id, value){
    if(id === 0) return !!this.unshift(value);
    if(id === this.length) return !!this.push(value);
    if(id > this.length) return false;

    const previousNode = this.get(id - 1);


    if(!previousNode || !previousNode.next) return false;

    const newNode = new Node(value);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;

    return true;
  }

  _reset(){
    this.head = undefined;
    this.tail = undefined;
  }
}

const list = new SinglyLinkedList();

list
  .push('first')
  // .unshift(1)
  .push('second')
  // .unshift(0)
  .push('third')

console.log(list.insert(2, ':)'));
console.log(list.set(2, ':*'));