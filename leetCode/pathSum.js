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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // 0. Intuition: Traverse tree and subtract node values from targetSum
    // 1. Base case: null node => return false
    // 2. If leaf node and value equals targetSum => return true
    // 3. Recurse left and right with updated targetSum

    // Time O(n)
    // Space O(n)

    if (!root) return false;

    if (!root.left && !root.right && root.val === targetSum) {
        return true;
    }

    const remainingSum = targetSum - root.val;

    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(5,
    new TreeNode(4,
        new TreeNode(11,
            new TreeNode(7),
            new TreeNode(2)
        )
    ),
    new TreeNode(8,
        new TreeNode(13),
        new TreeNode(4,
            null,
            new TreeNode(1)
        )
    )
);

console.log(hasPathSum(root, 22)); // Output: true
