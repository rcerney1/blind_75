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
    // 0. Intuition: Use DFS to check all paths
    // 1. Subtract current node's value from targetSum
    // 2. If it's a leaf and remaining sum == 0 → found a path

    // Time: O(n)
    // Space: O(h)

    if (!root) return false;

    // If it's a leaf node
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    // Recurse into left and right children with reduced sum
    return hasPathSum(root.left, targetSum - root.val) ||
           hasPathSum(root.right, targetSum - root.val);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//         5
//        / \
//       4   8
//      /   / \
//     11  13  4
//    /  \      \
//   7    2      1

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

const result = hasPathSum(root, 22);
console.log("Has path with sum 22:", result); // Output: true
