"use strict";

class BinaryTreeNode {
    constructor(value) {
        if (value) {
            this.value = value;
            this.left = null;
            this.right = null;
        } else throw SyntaxError("'value' can't be empty");
    }
}

class BinaryTree {
    constructor() {
        this._root = null;
    }

    traversePreOrder() {
        this.traversePreOrderHelper(this._root);

        const traversePreOrderHelper = node => {
            if (!node) return;
            console.log(node.value);
            traversePreOrderHelper(node.left);
            traversePreOrderHelper(node.right);
        };
    }

    traversePreOrderIterative() {
        let nodeStack = [];
        nodeStack.push(this._root);

        while (nodeStack.length) {
            let node = nodeStack.pop();
            console.log(node.value);

            if (node.right) {
                nodeStack.push(node.right);
            }
            if (node.left) {
                nodeStack.push(node.left);
            }
        }
    }

    traverseInOrder() {
        traverseInOrderHelper(this._root);

        const traverseInOrderHelper = node => {
            if (!node) return;
            traverseInOrderHelper(node.left);
            console.log(node.value);
            traverseInOrderHelper(node.right);
        };
    }

    traverseInOrderIterative() {
        let current = this._root;
        let s = [];
        let done = false;

        while (!done) {
            if (current !== null) {
                s.push(current);
                current = current.left;
            } else {
                if (s.length) {
                    current = s.pop();
                    console.log(current.value);
                    current = current.right;
                } else {
                    done = true;
                }
            }
        }
    }

    traversePostOrder() {
        traversePostOrderHelper(this._root);

        const traversePostOrderHelper = node => {
            if (node.left) {
                traversePostOrderHelper(node.left);
            }
            if (node.right) {
                traversePostOrderHelper(node.right);
            }
            console.log(node.value);
        };
    }

    traversePostOrderIterative() {
        let s1 = [];
        let s2 = [];

        s1.push(this._root);

        while (s1.length) {
            let node = s1.pop();
            s2.push(node);

            if (node.left) {
                s1.push(node.left);
            }
            if (node.right) {
                s1.push(node.right);
            }
        }
        while (s2.length) {
            let node = s2.pop();
            console.log(node.value);
        }
    }

    traverseLevelOrder() {
        let root = this._root;
        let queue = [];

        if (!root) {
            return;
        }
        queue.push(root);

        while (queue.length) {
            let temp = queue.shift();
            console.log(temp.value);
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
    }
}
