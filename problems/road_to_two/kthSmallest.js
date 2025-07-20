/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 0. Intuition: Inorder traversal = sorted order in BST
    // 1. Traverse in-order and stop at kth element

    // Time O(h + k)
    // Space O(h)

    const stack = [];
    let curr = root;

    while (true) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        k--;

        if (k === 0) return curr.val;

        curr = curr.right;
    }
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(3,
    new TreeNode(1, null, new TreeNode(2)),
    new TreeNode(4)
);

console.log(kthSmallest(root, 1)); // Output: 1
console.log(kthSmallest(root, 3)); // Output: 3
