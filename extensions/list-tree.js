class Node {
  constructor(data) {
    this.value = data ? data : null;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  Node
};