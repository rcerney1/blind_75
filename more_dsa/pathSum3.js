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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    // 0. Intuition: Use DFS + prefix sums (hashmap)
    // 1. Keep running prefix sum from root to current node
    // 2. For each node with prefix 'curr', number of valid paths ending here
    //    equals count of (curr - targetSum) seen before.
    // 3. Backtrack counts when returning from recursion.

    // Time: O(n)
    // Space: O(n)

    const prefix = new Map();
    prefix.set(0, 1); // one way to have sum 0 before starting
    let count = 0;

    const dfs = (node, curr) => {
        if (!node) return;

        curr += node.val;

        const need = curr - targetSum;
        if (prefix.has(need)) count += prefix.get(need);

        prefix.set(curr, (prefix.get(curr) || 0) + 1);

        dfs(node.left, curr);
        dfs(node.right, curr);

        // backtrack
        prefix.set(curr, prefix.get(curr) - 1);
        if (prefix.get(curr) === 0) prefix.delete(curr);
    };

    dfs(root, 0);
    return count;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//         10
//        /  \
//       5   -3
//      / \    \
//     3   2    11
//    / \   \
//   3  -2   1
const root = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(3,
            new TreeNode(3),
            new TreeNode(-2)
        ),
        new TreeNode(2,
            null,
            new TreeNode(1)
        )
    ),
    new TreeNode(-3,
        null,
        new TreeNode(11)
    )
);

console.log("Paths summing to 8:", pathSum(root, 8)); // Output: 3
// The valid paths are: [5,3], [5,2,1], [-3,11]
