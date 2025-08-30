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
var isValidBST = function(root) {
    // 0. Intuition: Use DFS with value bounds (min, max)
    // 1. Each node must be strictly between (min, max)
    // 2. Left subtree: (min, node.val), Right subtree: (node.val, max)
    //    Use -Infinity/+Infinity to start

    // Time: O(n)
    // Space: O(h)

    const dfs = (node, min, max) => {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;

        return dfs(node.left, min, node.val) &&
               dfs(node.right, node.val, max);
    };

    return dfs(root, -Infinity, Infinity);
};

// Example test cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Valid BST:
//       5
//      / \
//     3   7
//        / \
//       6   9
const validRoot = new TreeNode(5,
    new TreeNode(3),
    new TreeNode(7,
        new TreeNode(6),
        new TreeNode(9)
    )
);

// Invalid BST (because 4 is in the right subtree of 5 but < 5):
//       5
//      / \
//     1   6
//        / \
//       4   7
const invalidRoot = new TreeNode(5,
    new TreeNode(1),
    new TreeNode(6,
        new TreeNode(4),
        new TreeNode(7)
    )
);

console.log("Valid BST?", isValidBST(validRoot));   // true
console.log("Valid BST?", isValidBST(invalidRoot)); // false
