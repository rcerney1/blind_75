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
var deepestLeavesSum = function(root) {
    // 0. Intuition: Use level order traversal (BFS)
    // 1. At each level, overwrite sum
    // 2. The last level's sum is the answer

    // Time O(n)
    // Space O(n)

    if (!root) return 0;

    let queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        sum = 0;
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return sum;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4,
            new TreeNode(7)
        ),
        new TreeNode(5)
    ),
    new TreeNode(3,
        null,
        new TreeNode(6,
            null,
            new TreeNode(8)
        )
    )
);

console.log(deepestLeavesSum(root)); 
// Output: 15 (7 + 8)
