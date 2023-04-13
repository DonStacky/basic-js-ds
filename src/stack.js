const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  push(elem) {
    this[elem] = elem;
  }

  pop() {
    let last;
    for (let key in this) {
      last = key;
    }
    delete this[last];
    return +last;
  }

  peek() {
    let last;
    for (let key in this) {
      last = key;
    }
    return +this[last];
  }
}

module.exports = {
  Stack
};
