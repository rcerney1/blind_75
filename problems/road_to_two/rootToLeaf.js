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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // 0. Intuition: Use DFS to track path from root to each leaf
    // 1. On reaching leaf, push path to result
    // 2. Build path string along the way

    // Time O(n)
    // Space O(n)

    const result = [];

    const dfs = (node, path) => {
        if (!node) return;

        path += node.val;

        if (!node.left && !node.right) {
            result.push(path);
            return;
        }

        path += "->";
        dfs(node.left, path);
        dfs(node.right, path);
    };

    dfs(root, "");
    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3)
);

console.log(binaryTreePaths(root));
// Output: ["1->2->5", "1->3"]
