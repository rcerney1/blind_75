class BSTIterator {
    /**
     * @param {TreeNode} root
     */
    constructor(root) {
        this.stack = [];
        this._leftmostInorder(root);
    }

    _leftmostInorder(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    /**
     * @return {number}
     */
    next() {
        const node = this.stack.pop();
        if (node.right) {
            this._leftmostInorder(node.right);
        }
        return node.val;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.stack.length > 0;
    }
}

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(7,
    new TreeNode(3),
    new TreeNode(15,
        new TreeNode(9),
        new TreeNode(20)
    )
);

const iterator = new BSTIterator(root);
console.log(iterator.next());    // Output: 3
console.log(iterator.next());    // Output: 7
console.log(iterator.hasNext()); // Output: true
console.log(iterator.next());    // Output: 9
console.log(iterator.hasNext()); // Output: true
console.log(iterator.next());    // Output: 15
console.log(iterator.hasNext()); // Output: true
console.log(iterator.next());    // Output: 20
console.log(iterator.hasNext()); // Output: false
