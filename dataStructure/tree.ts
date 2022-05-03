class TreeNode{
  value: number;
  left: TreeNode | undefined;
  right: TreeNode | undefined;

  constructor(value: number){
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

class BinarySearchTree{
  root: TreeNode;
  constructor(root: TreeNode){
    this.root = root;
  }
  insert(value: number): TreeNode {
    const node = new TreeNode(value);
    if(!this.root){
      this.root = node;
    } else {
      let currentNode: TreeNode | undefined = this.root;

      while(currentNode){
        if(value < currentNode.value){
          if(currentNode.left){
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            currentNode = undefined;
          }
        } else if(currentNode.right){
          currentNode = currentNode.right;
        } else {
          currentNode.right = node;
          currentNode = undefined;
        }
      }
    }
    return node;
  }
}

const tree = new BinarySearchTree(new TreeNode(10));
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(6);
tree.insert(20);
tree.insert(17);

console.log(tree.root);
