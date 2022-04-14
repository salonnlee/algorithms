// 基于数组实现的顺序栈

class StackBasedOnArray {
  constructor(capacity) {
    this.items = [];
    this.capacity = capacity;
  }
  push(value) {
    if (this.items.length === this.capacity) return false;
    this.items.push(value);
    return true;
  }
  pop() {
    if (this.items.length === 0) return null;
    return this.items.pop();
  }
  clear() {
    this.items = [];
  }
  display() {
    for (let i = 0; i <= this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}
