class MaxBinaryHeap {
  values;
  constructor(values = []) {
    this.values = values;
  }
  insert(value) {
    this.values.push(value);
    return this.bubbleUp();
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

  swapValues(id1, id2) {
    const temp = this.values[id1];
    this.values[id1] = this.values[id2];
    this.values[id2] = temp;
  }

  getParent(id) {
    return Math.floor((id - 1) / 2);
  }
}

const heap = new MaxBinaryHeap([40, 35, 25, 34, 23, 16, 20]);
heap.insert(36)
console.log(heap.values);