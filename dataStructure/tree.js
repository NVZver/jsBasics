class Node{
  value;
  left;
  right;

  constructor(value){
    this.value = value;
  }
}

class BinarySearchTree{
  root;
  constructor(){ }

  insert(value){
    const node = new Node(value);
  
    if(!this.root) {
      this.root = node;
      return this.root;
    }

    let current = this.root;
    while(true) {
      if(value === current.value) return current;

      if(value < current.value){
        if(current.left){
          current = current.left;
        } else {
          current.left = node;
          return node;
        }
      } else {
        if(current.right){
          current = current.right;
        } else {
          current.right = node;
          return node;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

console.log(tree.root);
