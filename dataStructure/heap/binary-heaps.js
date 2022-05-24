class MaxBinaryHeap {
  values;
  constructor(values = []) {
    this.values = values;
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

const heap = new MaxBinaryHeap([40, 35, 25, 34, 23, 16, 20]);
// heap.insert(35)
console.log(heap.extractMax());
console.log(heap.values);