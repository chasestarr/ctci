const List = require('./00_List.js');

function palindrome(list) {
  let stack = [];
  let current = list.head;

  while (current) {
    stack.push(current.value);
    current = current.next;
  }

  current = list.head; // reset current;
  while (stack.length) {
    let val = stack.pop();
    if (current.value != val) {
      return false;
    }
    current = current.next;
  }

  return true;
}

let l = new List();
l.add(0);
l.add(1);
l.add(2);
l.add(3);
l.add(1);
l.add(0);

console.log(palindrome(l));