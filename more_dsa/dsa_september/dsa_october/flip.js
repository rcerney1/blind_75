/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    // 0. Intuition: Recursively check both no-flip and flip cases
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;

    const noFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    const flip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    return noFlip || flip;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
// Tree A:         Tree B:
//     1               1
//    / \             / \
//   2   3           3   2
const A = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const B = new TreeNode(1, new TreeNode(3), new TreeNode(2));
console.log("Flip equivalent?", flipEquiv(A, B)); // true
