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
var largestBSTSubtree = function(root) {
    // 0. Intuition: Postorder returns [isBST, size, min, max]
    // 1. If left/right are BST and node.val in (maxL, minR), combine

    let best = 0;

    const dfs = (node) => {
        if (!node) return [true, 0, Infinity, -Infinity];
        const [bL, sL, minL, maxL] = dfs(node.left);
        const [bR, sR, minR, maxR] = dfs(node.right);

        if (bL && bR && node.val > maxL && node.val < minR) {
            const size = sL + sR + 1;
            best = Math.max(best, size);
            return [true, size, Math.min(minL, node.val), Math.max(maxR, node.val)];
        }
        // not a BST here; return a broken state
        return [false, 0, -Infinity, Infinity];
    };

    dfs(root);
    return best;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//       10
//      /  \
//     5   15
//    / \    \
//   1   8    7
const root3 = new TreeNode(10,
  new TreeNode(5, new TreeNode(1), new TreeNode(8)),
  new TreeNode(15, null, new TreeNode(7))
);
console.log("Largest BST size:", largestBSTSubtree(root3)); // 3 (the 5-1-8 subtree)
