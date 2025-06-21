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
    // 0. Intuition: BFS with a twist — reverse order every other level
    // 1. Use queue to do normal level order
    // 2. Track level parity and reverse when needed

    // Time O(n)
    // Space O(n)

    if (!root) return [];

    const result = [];
    const queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (leftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val); // insert at beginning for reverse order
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(zigzagLevelOrder(root)); 
// Output: [[3], [20, 9], [15, 7]]
