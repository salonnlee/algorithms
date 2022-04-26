class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function find(value, tree) {
  let p = tree;
  while (p !== null) {
    if (value < p.value) {
      p = p.left;
    } else if (vlaue > p.value) {
      p = p.right;
    } else {
      return p;
    }
  }
  return null;
}

function insert(value, tree) {
  if (tree === null) {
    tree = new Node(value);
    return tree;
  }
  let p = tree;
  while (p !== null) {
    if (value > p.value) {
      if (p.right === null) {
        p.right = new Node(value);
        break;
      }
      p = p.right;
    } else {
      if (p.left === null) {
        p.left = new Node(value);
        break;
      }
      p = p.left;
    }
  }
  return tree;
}

function remove(value, tree) {
  let p = tree;
  let pp = null;
  while (p !== null && p.value !== value) {
    pp = p;
    if (value > p.value) {
      p = p.right;
    } else {
      p = p.left;
    }
  }
  if (p === null) {
    return tree;
  }

  if (p.left !== null && p.right !== null) {
    let minP = p.right;
    let minPP = p;
    while (minP.left !== null) {
      minPP = minP;
      minP = minP.left;
    }
    p.value = minP.value;
    p = minP;
    pp = minPP;
  }

  let child;
  if (p.left !== null) {
    child = p.left;
  } else if (p.right !== null) {
    child = p.right;
  } else {
    child = null;
  }

  if (pp === null) {
    tree = child;
  } else if (pp.left === p) {
    pp.left = child;
  } else {
    pp.right = child;
  }

  return tree;
}
