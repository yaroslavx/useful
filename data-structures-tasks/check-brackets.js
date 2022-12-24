class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const input1 = '[]';
const input2 = '{}[]';
const input3 = '[()]';
const input4 = '(())';
const input5 = '{[]}()';
const input6 = '{';
const input7 = '{[}';
const input8 = 'foo(bar)';
const input9 = 'foo(bar[i)';

function isBalanced(str) {
  const stack = new Stack();
  const buffer = [];
  const map = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  for (let i in str) {
    if (['(', '{', '['].includes(str[i])) {
      stack.push(str[i]);
    } else if (stack.peek() === map[str[i]]) {
      stack.pop();
    } else if ([')', '}', ']'].includes(str[i]) && stack.peek() !== str[i]) {
      return Number(i) + 1;
    }
  }
  if (stack.isEmpty()) {
    return 'Success';
  } else if (stack.size() === 1) {
    return 1;
  }
}

console.log('Success', isBalanced(input1));
console.log('Success', isBalanced(input2));
console.log('Success', isBalanced(input3));
console.log('Success', isBalanced(input4));
console.log('Success', isBalanced(input5));
console.log('1', isBalanced(input6));
console.log('3', isBalanced(input7));
console.log('Success', isBalanced(input8));
console.log('10', isBalanced(input9));
