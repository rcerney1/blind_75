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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // 0. Intuition: Use DFS to get height, return -1 if unbalanced
    // 1. If any subtree returns -1, propagate it up
    // 2. Otherwise return height

    // Time O(n)
    // Space O(n)

    const check = (node) => {
        if (!node) return 0;

        const left = check(node.left);
        const right = check(node.right);

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    };

    return check(root) !== -1;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const balancedRoot = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

const unbalancedRoot = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(4),
            new TreeNode(4)
        ),
        new TreeNode(3)
    ),
    new TreeNode(2)
);

console.log(isBalanced(balancedRoot));   // Output: true
console.log(isBalanced(unbalancedRoot)); // Output: false
