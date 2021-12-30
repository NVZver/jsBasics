/**
 * Node.
 * An item of Queue
 */
class Node {
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
 * Queue.
 *
 * FIFO data structure where the first value in is
 * always the first one out.
 */
class Queue{
  constructor(){
    this.first = undefined;
    this.last = undefined;
    this.size = 0;
  }

  /**
   * Adds a new Node to the end of the Queue
   * Implementation of `push` of `SinglyLinkedList`
   *
   * BigO: O(1)
   *
   * @param {*} value
   * @returns size
   */
  enqueue(value){
    const newNode = new Node(value);

    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }

    return ++this.size;
  }

  /**
   * Removes the first Node from the Queue
   * Implementation of `shift` of `SinglyLinkedList`
   *
   * BigO: O(1)
   *
   * @returns Node
   */
  dequeue(){
    if(this.size === 0) return undefined;
    const node = this.first;

    this.first = this.first.next;

    this.size--;

    if(this.size === 0) this.last = undefined;

    node.next = undefined;
    return node;
  }
}

const queue = new Queue();

console.log(queue.enqueue(0), queue.enqueue(1));
console.log(queue);
console.log(queue.dequeue(), queue.dequeue());
console.log(queue);