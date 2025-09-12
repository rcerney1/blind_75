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
var sumNumbers = function(root) {
    // 0. DFS carry path value: next = curr*10 + node.val
    // 1. On leaf, add to sum
    const dfs = (node, curr) => {
        if (!node) return 0;
        const next = curr * 10 + node.val;
        if (!node.left && !node.right) return next;
        return dfs(node.left, next) + dfs(node.right, next);
    };
    return dfs(root, 0);
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//    1
//   / \
//  2   3
const root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log("Sum root-to-leaf numbers:", sumNumbers(root3)); // 12 + 13 = 25
