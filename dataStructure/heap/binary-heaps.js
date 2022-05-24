class BinaryHeapBase {
  values;
  constructor(values = []) {
    this.values = values;
  }
  swapValues(id1, id2) {
    const temp = this.values[id1];
    this.values[id1] = this.values[id2];
    this.values[id2] = temp;
  }
  getParent(id) {
    return Math.floor((id - 1) / 2);
  }
  getChildLeft(id) {
    return id * 2 + 1;
  }
  getChildRight(id) {
    return id * 2 + 2;
  }
}

class MaxBinaryHeap extends BinaryHeapBase {
  constructor(values = []) {
    super(values);
  }

  insert(value) {
    this.values.push(value);
    return this.bubbleUp();
  }

  extractMax() {
    if (this.length === 1) return this.value.pop();

    const root = this.values[0];
    this.values[0] = this.values.pop();

    this.bubbleDown();

    return root;
  }

  bubbleDown(id = 0) {
    let val = this.values[id];
    let leftId = this.getChildLeft(id);
    let left = this.values[leftId] || -Infinity;
    let rightId = this.getChildRight(id);
    let right = this.values[rightId] || -Infinity;

    if (val > left && val > right) return;

    if (left > right) {
      this.swapValues(id, leftId);
      id = leftId;
    } else {
      this.swapValues(id, rightId);
      id = rightId;
    }
    this.bubbleDown(id);
  }

  bubbleUp() {
    let childId = this.values.length - 1;
    let parentId = this.getParent(childId);
    while (childId !== 0 && this.values[childId] > this.values[parentId]) {
      this.swapValues(childId, parentId);
      childId = parentId;
      parentId = this.getParent(childId);
    }
  }

}

class Node {
  value;
  priority;
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
/**
 * MinBinaryHeap
 */
class PriorityQueue extends BinaryHeapBase {
  constructor(values = []) {
    super(values);
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  dequeue() {
    if (this.values.length === 1) return this.values.pop();
    const root = this.values[0];
    this.values[0] = this.values.pop();

    this.bubbleDown();

    return root;
  }

  bubbleDown(id = 0) {
    const val = this.values[id];
    const leftId = this.getChildLeft(id);
    const leftVal = this.values[leftId] || new Node('Infinity', Infinity);
    const rightId = this.getChildRight(id);
    const rightVal = this.values[rightId] || new Node('Infinity', Infinity);

    console.log(val, leftVal, rightVal);

    if (val.priority < leftVal.priority && val.priority < rightVal.priority) return;

    if (leftVal.priority < rightVal.priority) {
      this.swapValues(id, leftId);
      id = leftId;
    } else {
      this.swapValues(id, rightId);
      id = rightId;
    }
    this.bubbleDown(id);
  }

  bubbleUp(id = this.values.length - 1) {
    const val = this.values[id];
    const parentId = this.getParent(id);
    const parent = this.values[parentId];
    console.log(val, parent);
    if (id === 0 || val.priority > parent.priority) return;
    this.swapValues(id, parentId);
    this.bubbleUp(parentId);
  }
}

// const heap = new MaxBinaryHeap([40, 35, 25, 34, 23, 16, 20]);
// heap.insert(35)
// console.log(heap.extractMax());
// console.log(heap.values);

const priorities = [1, 3, 5, 12, 33, 8, 10];
const nodes = priorities.map(item => new Node(item, item));
const queue = new PriorityQueue(nodes);
queue.enqueue('bla', 0);
console.log(queue.values.map(item => item.priority));
queue.dequeue();
console.log(queue.values.map(item => item.priority));