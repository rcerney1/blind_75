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
    // 0. Intuition: DFS to get heights of subtrees
    // 1. If height difference > 1 at any node, return false
    // 2. Use -1 as a signal that tree is unbalanced

    // Time: O(n)
    // Space: O(h)

    const dfs = (node) => {
        if (!node) return 0;

        const left = dfs(node.left);
        if (left === -1) return -1; // left subtree unbalanced

        const right = dfs(node.right);
        if (right === -1) return -1; // right subtree unbalanced

        if (Math.abs(left - right) > 1) return -1; // unbalanced

        return Math.max(left, right) + 1;
    };

    return dfs(root) !== -1;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Balanced Tree:
//      3
//     / \
//    9  20
//       / \
//      15  7

const root1 = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

// Unbalanced Tree:
//      1
//     /
//    2
//   /
//  3
const root2 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3)
    )
);

console.log("Tree 1 Balanced?", isBalanced(root1)); // true
console.log("Tree 2 Balanced?", isBalanced(root2)); // false
