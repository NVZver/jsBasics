function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(3);
root.next.next.next = new ListNode(4);
root.next.next.next.next = new ListNode(5);

function reverse(root){
  let current = root && root.next || undefined;
  let next = current && current.next || undefined;
  root.next = undefined;

  while(current){
    current.next = root;
    root = current;
    current = next;
    next = current && current.next || undefined;
  }
  return root;
}

var removeNthFromEnd = function(head, n) {

  head = reverse(head);
  let i = 0;
  let prev;
  let toDelete = head;
  while(i < n){
    prev = toDelete;
    toDelete = toDelete.next;
    i++;
  }
  prev.next = toDelete.next;
  
  head = reverse(head);
  toDelete.next = undefined;
  return toDelete;
};

console.log(removeNthFromEnd(root, 2), root);

