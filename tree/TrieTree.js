class TrieNode {
  constructor(data) {
    this.data = data;
    this.children = new Array(26);
    this.isEndingChar = false;
  }
}

class TrieTree {
  constructor(data) {
    this.root = new TrieNode("/");
  }
  insert(text) {
    let node = this.root;
    for (let char of text) {
      let index = char.charCodeAt() - "a".charCodeAt();
      if (!node.children[index]) {
        node.children[index] = new TrieNode(char);
      }
      node = node.children[index];
    }
    node.isEndingChar = true;
  }
  find(text) {
    let node = this.root;
    for (let char of text) {
      let index = char.charCodeAt() - "a".charCodeAt();
      if (node.children[index]) {
        node = node.children[index];
      } else {
        return false;
      }
    }
    return node.isEndingChar;
  }
}
