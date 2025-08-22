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
    // 0. Intuition: DFS traversal
    // 1. Keep track of path as we go down
    // 2. When we hit a leaf, push the path into result

    // Time: O(n)
    // Space: O(h)

    const result = [];

    const dfs = (node, path) => {
        if (!node) return;

        path.push(node.val);

        // If leaf node → add path
        if (!node.left && !node.right) {
            result.push(path.join("->"));
        } else {
            dfs(node.left, [...path]);
            dfs(node.right, [...path]);
        }
    };

    dfs(root, []);
    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//       1
//      / \
//     2   3
//      \
//       5

const root = new TreeNode(1,
    new TreeNode(2,
        null,
        new TreeNode(5)
    ),
    new TreeNode(3)
);

const result = binaryTreePaths(root);
console.log("All Paths:", result); 
// Output: ["1->2->5", "1->3"]
