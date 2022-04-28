function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

function bfs(s, t) {
  if (s === t) return;
  const visited = new Map();
  visited.set(s, s.val);
  const queue = [];
  queue.push(s);
  const prev = new Map();

  while (queue.length !== 0) {
    const w = queue.shift();
    for (let i = 0; i < w.neighbors.length; i++) {
      const q = w.neighbors[i];
      if (!visited.has(q)) {
        prev.set(q, w);
        if (q === t) {
          print("bfs", prev, s, t);
          return;
        }
        visited.set(q, q.val);
        queue.push(q);
      }
    }
  }
}

function dfs(s, t) {
  let found = false;
  const visited = new Map();
  const prev = new Map();
  recurDfs(s, t, visited, prev, found);
  print("dfs", prev, s, t);
}

function recurDfs(w, t, visited, prev, found) {
  if (found === true) return;
  visited.set(w, w.val);
  if (w === t) {
    found = true;
    return;
  }
  for (let i = 0; i < w.neighbors.length; i++) {
    const q = w.neighbors[i];
    if (!visited.has(q)) {
      prev.set(q, w);
      recurDfs(q, t, visited, prev, found);
    }
  }
}

function print(alg, prev, s, t) {
  let w = t;
  let p = "";
  while (prev.has(w) && w !== s) {
    p = w.val + " " + p;
    w = prev.get(w);
  }
  if (w) {
    p = w.val + " " + p;
  }
  p = alg + " " + p;
  console.log(p);
}

const n0 = new Node(0);
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);
n0.neighbors = [n1, n3];
n1.neighbors = [n0, n2, n4];
n2.neighbors = [n1, n5];
n3.neighbors = [n0, n4];
n4.neighbors = [n1, n3, n5, n6];
n5.neighbors = [n2, n4, n7];
n6.neighbors = [n4, n7];
n7.neighbors = [n5, n6];
const s = n0;
const t = n6;
bfs(s, t);
dfs(s, t);
