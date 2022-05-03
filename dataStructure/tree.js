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

  search(value){
    if(!this.root) return undefined;
    if(this.root.value === value) return this.root;

    let current = value < this.root ? this.root.left : this.root.right;
    while(current){
      if(value === current.value) return current;
      current = value < current.value ? current.left : current.right;
    }

    return undefined;
  }

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

console.log(tree.search(153));
