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
    // 0. Intuition: At each node in root, check if the subtree matches subRoot
    // 1. Use helper to compare full subtree equality
    // 2. Recurse left and right if not equal

    // Time O(n * m) worst case
    // Space O(n) for recursion stack

    const isSameTree = (s, t) => {
        if (!s && !t) return true;
        if (!s || !t || s.val !== t.val) return false;
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    };

    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(3,
    new TreeNode(4,
        new TreeNode(1),
        new TreeNode(2)
    ),
    new TreeNode(5)
);

const subRoot = new TreeNode(4,
    new TreeNode(1),
    new TreeNode(2)
);

console.log(isSubtree(root, subRoot)); 
// Output: true
