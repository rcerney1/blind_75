/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 0. Intuition: Compare nodes recursively
    // 1. If both are null → true
    // 2. If only one is null → false
    // 3. Compare values, then check left & right subtrees

    // Time: O(n) — n is total number of nodes
    // Space: O(h) — recursion stack

    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Tree 1:
//     1
//    / \
//   2   3
const t1 = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3)
);

// Tree 2:
//     1
//    / \
//   2   3
const t2 = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3)
);

const result = isSameTree(t1, t2);
console.log("Are trees the same?", result); // Output: true
