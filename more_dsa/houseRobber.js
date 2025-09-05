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
var rob = function(root) {
    // 0. Intuition: At each node, two choices:
    //    - Rob it → cannot rob children
    //    - Skip it → can rob children
    // 1. Use DFS returning [robThis, skipThis]
    // 2. robThis = node.val + skip(left) + skip(right)
    //    skipThis = max(left) + max(right)

    // Time: O(n)
    // Space: O(h)

    const dfs = (node) => {
        if (!node) return [0, 0];

        const left = dfs(node.left);
        const right = dfs(node.right);

        const robThis = node.val + left[1] + right[1];
        const skipThis = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

        return [robThis, skipThis];
    };

    const [robRoot, skipRoot] = dfs(root);
    return Math.max(robRoot, skipRoot);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//       3
//      / \
//     2   3
//      \    \
//       3    1
const root = new TreeNode(3,
    new TreeNode(2,
        null,
        new TreeNode(3)
    ),
    new TreeNode(3,
        null,
        new TreeNode(1)
    )
);

const result = rob(root);
console.log("Max amount robbed:", result); // Output: 7 (3 + 3 + 1)
