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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    // 0. Intuition: DFS with backtracking to explore all paths
    // 1. Track current path and sum at each node
    // 2. If leaf and sum == targetSum, push path

    // Time O(n^2) in worst case (due to path copy)
    // Space O(n) for recursion stack

    const result = [];

    const dfs = (node, path, sum) => {
        if (!node) return;

        path.push(node.val);
        sum += node.val;

        if (!node.left && !node.right && sum === targetSum) {
            result.push([...path]);
        }

        dfs(node.left, path, sum);
        dfs(node.right, path, sum);

        path.pop(); // backtrack
    };

    dfs(root, [], 0);
    return result;
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
            new TreeNode(5),
            new TreeNode(1)
        )
    )
);

console.log(pathSum(root, 22));
// Output: [
//   [5, 4, 11, 2],
//   [5, 8, 4, 5]
// ]
