/**
 * Node.
 * An item of Stack
 */
class Node{
  /**
   * Constructor
   * @param {*} value
   */
  constructor(value){
    this.value = value;
    this.next = undefined;
  }
}

/**
 * Stack.
 * LIFO data structure where the last value in is
 * always the first one out.
 */
class Stack{
  /**
   * Constructor
   */
  constructor(){
    this.first = undefined;
    this.last = undefined;
    this.size = 0;
  }

  /**
   * Pushes new value to the stack.
   * Implementation of `unshift` of SingleLinkedList
   *
   * BigO: O(1)
   *
   * @param {*} value
   * @returns size
   */
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

  /**
   * Pops out the last added Node.
   * Implementation of `shift` of SingleLinkedList
   *
   * BigO: O(1)
   *
   * @returns Node
   */
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