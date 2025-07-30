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
var goodNodes = function(root) {
    // 0. Intuition: Use DFS and pass max value seen so far
    // 1. Count node if it's greater than or equal to max on the path
    // 2. Recurse into children, updating max

    // Time: O(n) — visit each node once
    // Space: O(h) — call stack height

    let count = 0;

    const dfs = (node, maxSoFar) => {
        if (!node) return;

        if (node.val >= maxSoFar) {
            count++;
        }

        const newMax = Math.max(maxSoFar, node.val);
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    };

    dfs(root, root.val);
    return count;
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
//       1   4
//      /   / \
//     3   1   5

const root = new TreeNode(3,
    new TreeNode(1,
        new TreeNode(3),
        null
    ),
    new TreeNode(4,
        new TreeNode(1),
        new TreeNode(5)
    )
);

const result = goodNodes(root);
console.log("Number of good nodes:", result); // Output: 4
