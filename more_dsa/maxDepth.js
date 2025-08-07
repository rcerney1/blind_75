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
 * @return {number}
 */
var maxDepth = function(root) {
    // 0. Intuition: Use DFS to compute depth recursively
    // 1. Base case: null node = depth 0
    // 2. Recurse into children and take the max

    // Time: O(n)
    // Space: O(h)

    if (!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//       3
//      / \
//     9  20
//        / \
//       15  7

const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

const result = maxDepth(root);
console.log("Max Depth:", result); // Output: 3
