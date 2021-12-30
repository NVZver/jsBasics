class Node{
  constructor(value){
    this.value = value;
    this.next = undefined;
  }
}

class Stack{
  constructor(){
    this.first = undefined;
    this.last = undefined;
    this.size = 0;
  }

  push(value){
    const newNode = new Node(value);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop(){
    if(this.size === 0) return undefined;

    const poppedNode = this.first;

    this.first = this.first.next;

    this.size--;

    if(this.size === 0){
      this.last = undefined;
    }

    return poppedNode;
  }
}

const stack = new Stack();

console.log(stack.push(0), stack.push(1));
console.log(stack);
console.log(stack.pop(), stack.pop());
console.log(stack);