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
var sumOfLeftLeaves = function(root) {
    // 0. Intuition: Use DFS to explore tree
    // 1. If left child is a leaf, add its value
    // 2. Recurse into left and right children

    // Time: O(n) — visit each node once
    // Space: O(h) — call stack height

    let sum = 0;

    const dfs = (node) => {
        if (!node) return;

        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }

        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return sum;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//         3
//        / \
//       9  20
//          / \
//         15  7

const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

const result = sumOfLeftLeaves(root);
console.log("Sum of left leaves:", result); // Output: 24 (9 + 15)
