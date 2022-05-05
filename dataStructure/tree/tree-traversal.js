class QueueNode {
  value;
  next;
  prev;
  constructor(value) {
    this.value = value;
  }
}
class Queue {
  head;
  size = 0;

  enqueue(value) {
    if (!value) return undefined;

    const node = new QueueNode(value);
    if (!this.head) {
      this.head = node;
      this.size++;
      return this.head;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    node.prev = current;
    current.next = node;
    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }
    const toDelete = this.head;
    this.head = this.head.next;
    this.size--;
    return toDelete;
  }
}

class TreeNode {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
  }
}

class Tree {
  root;

  constructor(root) {
    this.root = root;
  }

  getValuesBreadthFirst() {
    const queue = new Queue(); // Queue is here just for practice. You can use Array instead;
    queue.enqueue(this.root);
    const values = [];
    while (queue.size) {
      const node = queue.dequeue().value;
      values.push(node.value);
      queue.enqueue(node.left);
      queue.enqueue(node.right);
    }
    return values;
  }
  getValuesDeepFirstPreOrder() {
    const values = [];

    function traverse(treeNode) {
      if (treeNode) {
        values.push(treeNode.value); // push first, then recursevly traverse
        if (treeNode.left) traverse(treeNode.left);
        if (treeNode.right) traverse(treeNode.right);
      }
    }

    traverse(this.root);

    return values;
  }
  getValuesDeepFirstPostOrder() {
    const values = [];

    function traverse(treeNode) {
      if (treeNode) {
        if (treeNode.left) traverse(treeNode.left);
        if (treeNode.right) traverse(treeNode.right);
        values.push(treeNode.value); // push after traversing
      }
    }

    traverse(this.root);

    return values;
  }
  getValuesDeepFirstInOrder() {
    const values = [];

    function traverse(treeNode) {
      if (treeNode) {
        if (treeNode.left) traverse(treeNode.left);
        values.push(treeNode.value); // root in the middle
        if (treeNode.right) traverse(treeNode.right);
      }
    }

    traverse(this.root);

    return values;
  }
}
/**
 *        10
 *     5     15
 *   2   7 12   17
 */
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);

root.right = new TreeNode(15);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(17);

const tree = new Tree(root);

console.log(tree.getValuesBreadthFirst());       // [10, 5, 15, 2, 7, 12, 17]
console.log(tree.getValuesDeepFirstPreOrder());  // [10, 5, 2, 7, 15, 12, 17]
console.log(tree.getValuesDeepFirstPostOrder()); // [2, 7, 5, 12, 17, 15, 10]
console.log(tree.getValuesDeepFirstInOrder());   // [2, 5, 7, 10, 12, 15, 17]
