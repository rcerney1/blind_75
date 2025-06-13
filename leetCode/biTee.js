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
var maxPathSum = function(root) {
    // 0. Intuition: At each node, calculate the max gain from left and right
    // 1. Update a global max path sum including both sides
    // 2. Return max gain to parent (only one side can be used in upward path)

    // Time O(n)
    // Space O(n)

    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        const leftGain = Math.max(dfs(node.left), 0);
        const rightGain = Math.max(dfs(node.right), 0);

        const currentMax = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, currentMax);

        return node.val + Math.max(leftGain, rightGain);
    };

    dfs(root);
    return maxSum;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(-10,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(maxPathSum(root)); 
// Output: 42 (15 + 20 + 7)
