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
    // 0. Intuition: DFS backtracking
    // 1. Track current path and remaining sum
    // 2. If at a leaf and sum == 0 → add path to result

    // Time: O(n^2) in worst case (skewed tree with long paths)
    // Space: O(h) recursion + O(n) for storing paths

    const result = [];

    const dfs = (node, path, remaining) => {
        if (!node) return;

        path.push(node.val);
        remaining -= node.val;

        if (!node.left && !node.right && remaining === 0) {
            result.push([...path]);
        } else {
            dfs(node.left, path, remaining);
            dfs(node.right, path, remaining);
        }

        path.pop(); // backtrack
    };

    dfs(root, [], targetSum);
    return result;
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
//    /  \    / \
//   7    2  5   1

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

const result = pathSum(root, 22);
console.log("Paths with sum 22:", result);
// Output: [[5,4,11,2], [5,8,4,5]]
