const List = require('./00_List.js');

function deleteNode(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

let l = new List();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
l.add(6);

l.print();
console.log('===========');

let f = l.find(3);
deleteNode(f);

l.print();