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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // 0. Traverse root, at each node check identical trees
    const isSame = (a, b) => {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;
        return isSame(a.left, b.left) && isSame(a.right, b.right);
    };

    const dfs = (node) => {
        if (!node) return false;
        if (isSame(node, subRoot)) return true;
        return dfs(node.left) || dfs(node.right);
    };

    return dfs(root);
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
// Root:
//     3
//    / \
//   4   5
//  / \
// 1   2
const root3 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5)
);
// Sub:
//   4
//  / \
// 1   2
const sub3 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log("Is subtree?", isSubtree(root3, sub3)); // true
