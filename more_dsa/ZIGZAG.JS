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
var zigzagLevelOrder = function(root) {
    // 0. Intuition: Standard BFS by levels, then reverse every other level
    // 1. Use a queue; collect nodes per level
    // 2. If level index is odd, reverse before pushing to result

    // Time: O(n)
    // Space: O(n)

    if (!root) return [];

    const result = [];
    const queue = [root];
    let level = 0;

    while (queue.length) {
        const size = queue.length;
        const curr = [];

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            curr.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (level % 2 === 1) curr.reverse();
        result.push(curr);
        level++;
    }

    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//        3
//       / \
//      9  20
//         / \
//        15  7

const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

const result = zigzagLevelOrder(root);
console.log("Zigzag Level Order:", result); 
// Output: [[3], [20, 9], [15, 7]]
