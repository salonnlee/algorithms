// 基于数组实现的顺序队列

class QueueBasedOnArray {
  constructor(capacity) {
    this.items = [];
    this.capacity = capacity;
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(value) {
    // if (this.tailIndex === this.capacity) return false;
    if (this.tailIndex === this.capacity) {
      if (this.headIndex === 0) return false;
      for (let i = this.headIndex; i < this.tailIndex; ++i) {
        this.items[i - this.headIndex] = this.items[i];
      }
      this.tailIndex -= this.headIndex;
      this.headIndex = 0;
    }
    this.items[this.tailIndex] = value;
    ++this.tailIndex;
    return true;
  }
  dequeue() {
    if (this.headIndex === this.tailIndex) return null;
    const value = this.items[this.headIndex];
    ++this.headIndex;
    return value;
  }
}
