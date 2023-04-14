const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//   this.data = data;
//   this.left = null;
//   this.right = null;
//   }
// }
let res;
let current;
class BinarySearchTree {
  // constructor(data) {
  //   this.data = data;
  //   this.left = null;
  //   this.right = null;
  //   }

  root() {
    return this.data ? this : null;
    // throw new NotImplementedError('Not implemented');
  }

  add(data) {
    if (this.data) {
      if (this.data === data) {
        console.log(this);
        return this;
      }
      if (data < this.data) {
        if (!this.left) {
          this.left = new BinarySearchTree;
          }
        this.left.add(data);
      } else {
        if (!this.right) {
        this.right = new BinarySearchTree;
        }
        this.right.add(data);
      }
    } else {
      this.data = data;
      this.left = null;
      this.right = null;
    }
    }
  

    has(value) {
      if (this.data === value) {
        res = true;
      } else if (!this.data) {
        res =  false;
      } else if (value < this.data) {
        if (!this.left) {
          res =  false;
          return;
        }
        this.left.has(value);
      } else {
        if (!this.right) {
          res =  false;
          return;
        }
        this.right.has(value);
      }
      return res;
    }

  find(value) {
    if (this.data === value) {
      res = this;
    } else if (!this.data) {
      res =  null;
    } else if (value < this.data) {
      if (!this.left) {
        res = null;
        return;
      }
      this.left.find(value);
    } else {
      if (!this.right) {
        res = null;
        return;
      }
      this.right.find(value);
    }
    return res;
  }

  remove(value) {
    if (!this.data) {
      return null;
    }
    if (value < this.data) {
      current = this;
      this.left.remove(value);
    } else if (value > this.data) {
      current = this;
      this.right.remove(value);
    } else {
      if (!this.left && !this.right) {
        if (this.data < current.data) {
          current.left = null;
        } else if (this.data > current.data) {
          current.right = null;
        }
        //   current.data = null;
      }
        if (this.left || this.right) {
          current = this;
        if (current.data < value) {
          if (!this.left) {
            // console.log(current);
            // console.log(this.right);
            current.right = this.right;
            } else if (!this.rigth) {
              if (current.data > value) {
            current.right = this.left;
              }
            }
          let minFromRight = this.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          current.right = this.right;
          minFromRight.left = this.left;
      } else if (current.data > value) {
          if (!this.left) {
            current.left = this.right;
            }
          if (!this.rigth) {
              if (current.data > value) {
            current.left = this.left;
              }
            }
          // let minFromRight = this.right;
          // while (minFromRight.left) {
          //   minFromRight = minFromRight.left;
          // }
          // current.left = this.right;
          // minFromRight.left = this.left;
        } else if (current.data = value) {
          if (!current.left) {
          let minFromRight = this.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          current.data = current.right.data;
          current.left = current.right.left;
          current.right = current.right.right;
        } else {
          let minFromRight = this.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          current.data = current.right.data;
          if (this.right.left) {
          minFromRight.left = current.left;
          current.left = minFromRight;
          } else {
          minFromRight.left = current.left;
          }
          current.right = current.right.right;
        }
        }
      }
      }
    }

    min() {
      if (!this.data) {
        return null;
      }
      let node = this;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }

  max() {
    if (!this.data) {
      return null;
    }
    let node = this;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};