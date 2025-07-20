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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    // 0. Intuition: DFS with pruning based on BST rules
    // 1. Only explore left if node.val > low
    // 2. Only explore right if node.val < high

    // Time O(n)
    // Space O(h)

    if (!root) return 0;

    let sum = 0;

    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }

    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(3),
        new TreeNode(7)
    ),
    new TreeNode(15,
        null,
        new TreeNode(18)
    )
);

console.log(rangeSumBST(root, 7, 15)); 
// Output: 32 (7 + 10 + 15)
