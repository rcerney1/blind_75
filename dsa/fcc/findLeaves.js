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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    // 0. Intuition: Use postorder DFS
    // 1. The "height" of each node = distance from leaf
    // 2. Group nodes by height

    // Time O(n)
    // Space O(n)

    const result = [];

    const dfs = (node) => {
        if (!node) return -1;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);
        const height = Math.max(leftHeight, rightHeight) + 1;

        if (!result[height]) result[height] = [];
        result[height].push(node.val);

        return height;
    };

    dfs(root);
    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

console.log(findLeaves(root));

