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
    // 0. Intuition: Use DFS to compute max gain from each subtree
    // 1. Track a global max sum as we explore
    // 2. At each node, path sum can include left + node + right

    // Time: O(n)
    // Space: O(h)

    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        // Only consider positive gains from children
        const leftGain = Math.max(dfs(node.left), 0);
        const rightGain = Math.max(dfs(node.right), 0);

        // Max path sum THROUGH this node
        const priceNewPath = node.val + leftGain + rightGain;

        // Update global max if needed
        maxSum = Math.max(maxSum, priceNewPath);

        // Return max gain to continue path upward
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

// Input Tree:
//        -10
//        /  \
//       9   20
//          /  \
//         15   7

const root = new TreeNode(-10,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

const result = maxPathSum(root);
console.log("Max Path Sum:", result); // Output: 42 (15 → 20 → 7)
