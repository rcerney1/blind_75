/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

var BSTIterator = function(root) {
    // 0. Intuition: Controlled inorder traversal using a stack
    // 1. Push all left nodes from root
    // 2. next(): pop top, push its right branch's left spine
    // 3. hasNext(): stack non-empty

    // Space: O(h)
    // Amortized time per op: O(1)

    this.stack = [];

    const pushLeft = (node) => {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    };

    this._pushLeft = pushLeft;
    pushLeft(root);
};

/**
 * @return {number} the next smallest number
 */
BSTIterator.prototype.next = function() {
    const node = this.stack.pop();
    if (node.right) this._pushLeft(node.right);
    return node.val;
};

/**
 * @return {boolean} whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Build BST:
//        7
//       / \
//      3   15
//         /  \
//        9    20
const root = new TreeNode(7,
    new TreeNode(3),
    new TreeNode(15,
        new TreeNode(9),
        new TreeNode(20)
    )
);

const it = new BSTIterator(root);
const output = [];
while (it.hasNext()) output.push(it.next());
console.log("BST Iterator inorder:", output); // [3, 7, 9, 15, 20]
