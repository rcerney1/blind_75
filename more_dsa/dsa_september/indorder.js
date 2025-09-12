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
 * @param {TreeNode} p
 * @return {TreeNode|null}
 */
var inorderSuccessor = function(root, p) {
    // 0. Intuition: If p has right child → successor = leftmost of right subtree
    // 1. Else: track the lowest ancestor > p while traversing from root

    let succ = null;
    let curr = root;

    while (curr) {
        if (p.val < curr.val) {
            succ = curr;
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return succ;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
const root1 = new TreeNode(5,
  new TreeNode(3, new TreeNode(2), new TreeNode(4)),
  new TreeNode(7, new TreeNode(6), new TreeNode(8))
);
const p1 = root1.left.right; // 4
const s1 = inorderSuccessor(root1, p1);
console.log("Successor of 4:", s1 ? s1.val : null); // 5
