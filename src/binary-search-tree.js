const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
//   }
// }
class BinarySearchTree {
  // constructor(value) {
  //   this.value = value;
  //   this.left = null;
  //   this.right = null;
  //   }

  root() {
    return this.value ? this.value : null;
    // throw new NotImplementedError('Not implemented');
  }

  add(value) {
    this.value = addNode(this.value, value);
    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.value === value) {
        return node;
      }
      if (value < node.value) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }
      return node;
      }
    // throw new NotImplementedError('Not implemented');
    }
  

  has(value) {
    return searchNode(this.value, value);
    function searchNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      };
      return value < node.value ?
      searchNode(node.left, value):
      searchNode(node.right, value);
    }
  }

  find(value) {
    return findNode(this.value, value);
    function findNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.value === value) {
        // console.log(this.value);
        return node.value;
      };
      return value < node.value ?
      findNode(node.left, value):
      findNode(node.right, value);
    }
  }

  remove(value) {
    this.value = removeNode(this.value, value);
    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRightNode = node.right;
        while (minRightNode.left) {
          minRightNode = minRightNode.left;
        }
        node.value = minRightNode.value;
        node.right = removeNode(node.right, minRightNode.value);
        return node;
      }

    }
  }

  min() {
    if (!this.value) {
      return null;
    }
    let node = this.value;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.value) {
      return null;
    }
    let node = this.value;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};