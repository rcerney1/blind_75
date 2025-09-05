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
    // 0. Intuition: Use DFS to compute subtree heights
    // 1. At each node, track longest left+right path
    // 2. Update global max as we traverse

    let diameter = 0;

    const dfs = (node) => {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    };

    dfs(root);
    return diameter;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//       1
//      / \
//     2   3
//    / \     
//   4   5    
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

const result = diameterOfBinaryTree(root);
console.log("Diameter:", result); // Output: 3 (path is [4 → 2 → 1 → 3] or [5 → 2 → 1 → 3])
