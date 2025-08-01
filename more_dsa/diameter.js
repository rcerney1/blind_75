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
var diameterOfBinaryTree = function(root) {
    // 0. Intuition: Track the longest left+right path through any node
    // 1. Use DFS to get height of each subtree
    // 2. Update max diameter at each node

    // Time: O(n)
    // Space: O(h)

    let maxDiameter = 0;

    const dfs = (node) => {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        // update max diameter if longer path found
        maxDiameter = Math.max(maxDiameter, left + right);

        // return height
        return Math.max(left, right) + 1;
    };

    dfs(root);
    return maxDiameter;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//         1
//        / \
//       2   3
//      / \     
//     4   5    

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

const result = diameterOfBinaryTree(root);
console.log("Diameter:", result); // Output: 3 (path: 4 → 2 → 1 → 3)
