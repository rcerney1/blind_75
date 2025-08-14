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
var minDepth = function(root) {
    // 0. Intuition: Use DFS or BFS to find first leaf node
    // 1. BFS is cleaner since it finds the shortest path naturally
    // 2. Return the depth at which we encounter the first leaf

    // Time: O(n)
    // Space: O(n)

    if (!root) return 0;

    const queue = [[root, 1]]; // [node, depth]

    while (queue.length > 0) {
        const [node, depth] = queue.shift();

        if (!node.left && !node.right) {
            return depth; // First leaf found
        }

        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//         3
//        / \
//       9  20
//          / \
//         15  7

const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

const result = minDepth(root);
console.log("Min Depth:", result); // Output: 2
