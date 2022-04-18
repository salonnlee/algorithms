// 基于链表实现的循环队列

class CircularQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.head.next = this.head;
      this.tail = this.head;
    } else {
      const flag = this.head === this.tail;
      this.tail.next = new Node(value);
      this.tail.next.next = this.head;
      this.tail = this.tail.next;
      if (flag) {
        this.head.next = this.tail;
      }
    }
  }
  dequeue() {
    if (this.head == null) return -1;

    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      return value;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.tail.next = this.head;
      return value;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
