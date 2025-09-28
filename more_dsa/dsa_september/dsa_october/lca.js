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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    // 0. Intuition: Postorder returning (depth, lca)
    // 1. If leftDepth == rightDepth → current node is LCA
    // 2. Else take deeper side’s (depth, lca)

    const dfs = (node) => {
        if (!node) return [0, null];
        const [dl, nl] = dfs(node.left);
        const [dr, nr] = dfs(node.right);
        if (dl === dr) return [dl + 1, node];
        return dl > dr ? [dl + 1, nl] : [dr + 1, nr];
    };

    return dfs(root)[1];
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//       3
//      / \
//     5   1
//    / \   \
//   6   2   4
//      / \
//     7   8
const root2 = new TreeNode(3,
  new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(8))),
  new TreeNode(1, null, new TreeNode(4))
);
const ans2 = lcaDeepestLeaves(root2);
console.log("LCA of deepest leaves:", ans2.val); // 2 (deepest leaves are 7,8)
