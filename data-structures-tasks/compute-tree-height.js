class Node {
  constructor() {
    this.key = 0;
    this.child = [];
    this.isRoot = false;
  }
}

function newNode(key) {
  let temp = new Node();
  temp.key = key;
  return temp;
}

// const input = '5\n4 -1 4 1 1';
const input = '5\n-1 0 4 0 3';
const length = input.split('\n')[0];
const parents = input.split('\n')[1].split(' ');
const nodes = [];
let rootIndex;
for (let i in parents) {
  nodes[i] = newNode(i);
}
for (let i in parents) {
  if (parents[i] === '-1') {
    rootIndex = i;
    nodes[i].isRoot = true;
  } else {
    nodes[parents[i]].child.push(nodes[i]);
  }
}

function getHeight(node) {
  let height = 0;
  if (node.child.length === 0) return 1;
  for (let i of node.child) {
    height = Math.max(height, getHeight(i) + 1);
  }
  return height;
}

console.log(nodes);
console.log(getHeight(nodes[rootIndex]));
