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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    // 0. Intuition: Serialize subtrees and count occurrences
    // 1. Use a map: serialization -> frequency
    // 2. When frequency hits 2, push root

    const seen = new Map();
    const res = [];

    const dfs = (node) => {
        if (!node) return "#";
        const serial = `${node.val},${dfs(node.left)},${dfs(node.right)}`;
        const cnt = (seen.get(serial) || 0) + 1;
        seen.set(serial, cnt);
        if (cnt === 2) res.push(node);
        return serial;
    };

    dfs(root);
    return res;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//      1
//     / \
//    2   3
//   /   / \
//  4   2   4
//     /
//    4
const root1 = new TreeNode(1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, new TreeNode(2, new TreeNode(4)), new TreeNode(4))
);
const dups = findDuplicateSubtrees(root1);
console.log("Duplicate subtree roots:", dups.map(n => n.val)); // e.g., [2, 4]
