// LRU 缓存 ( LeetCode 146 )

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {any} key
 * @return {any}
 */
LRUCache.prototype.get = function (key) {
  const value = this.cache.get(key);
  if (value === undefined) {
    return -1;
  }
  this.cache.delete(key);
  this.cache.set(key, value);
  return value;
};

/**
 * @param {any} key
 * @param {any} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  const keys = this.cache.keys();
  while (this.cache.size > this.capacity) {
    this.cache.delete(keys.next().value);
  }
  return this.cache; // use-for-log
};

lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // 缓存是 { 1 => 1 }
console.log(lRUCache.put(2, 2)); // 缓存是 { 1 => 1, 2 => 2 }
console.log(lRUCache.get(1)); // 返回 1，缓存是 { 2 => 2, 1 => 1 }
console.log(lRUCache.put(3, 3)); // 该操作会使得关键字 2 作废，缓存是 { 1 => 1, 3 => 3 }
console.log(lRUCache.get(2)); // 返回 -1 (未找到)，缓存是 { 1 => 1, 3 => 3 }
console.log(lRUCache.put(4, 4)); // 该操作会使得关键字 1 作废，缓存是 { 3 => 3, 4 => 4 }
console.log(lRUCache.get(1)); // 返回 -1 (未找到)，缓存是 { 3 => 3, 4 => 4 }
console.log(lRUCache.get(3)); // 返回 3，缓存是 { 4 => 4, 3 => 3 }
console.log(lRUCache.get(4)); // 返回 4，缓存是 { 3 => 3, 4 => 4 }
