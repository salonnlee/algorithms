// 基于链表实现的链式栈

class StackBasedOnLinkedList {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }
  pop() {
    if (this.top === null) {
      return null;
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  clear() {
    this.top = null;
  }
  display() {
    if (this.top !== null) {
      let temp = this.top;
      while (temp !== null) {
        console.log(temp.value);
        temp = temp.next;
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
