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
var isSymmetric = function(root) {
    // 0. Intuition: Use recursion to compare left & right subtrees
    // 1. Check if left.val == right.val AND
    //    left.left vs right.right AND left.right vs right.left

    // Time: O(n)
    // Space: O(h)

    if (!root) return true;

    const isMirror = (t1, t2) => {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;

        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };

    return isMirror(root.left, root.right);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Symmetric Tree:
//        1
//      /   \
//     2     2
//    / \   / \
//   3   4 4   3

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3),
        new TreeNode(4)
    ),
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(3)
    )
);

const result = isSymmetric(root);
console.log("Is Symmetric:", result); // Output: true
