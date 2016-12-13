class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = { value: value, next: null };
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;

    this.tail = node;
  }

  print() {
    let current = this.head;
    console.log(current.value);

    while (current.next) {
      console.log(current.next.value);
      current = current.next;
    }
  }
}

module.exports = List;