const List = require('./00_List.js');

function cycle(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      fast = list.head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
}

let l = new List();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
l.add(6);
l.add(7);
l.find(7).next = l.find(3);
console.log(cycle(l));