const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    // let arr = {};
    // arr.value = this.value;
    // arr.next = this.next;
    // console.log(arr);
    return this;
  }

  enqueue(x) {
    if (this.value) {
      if (!this.next) {
      this.next = new Queue(null)
      }
      let current = this.next;
      current.enqueue(x);
    } else {
      this.value = x;
      this.next = null;
    }
  }

  dequeue() {
    let firstElem = this.value;
    let current = this.next;
    this.value = current.value;
    this.next = current.next;
    console.log(firstElem);
    return firstElem;
  }
}

module.exports = {
  Queue
};
