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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 0. Intuition: Use DFS to visit each node
    // 1. Swap left and right children at each node
    // 2. Recurse into both children

    // Time: O(n)
    // Space: O(h)

    if (!root) return null;

    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 6   9

const root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7,
        new TreeNode(6),
        new TreeNode(9)
    )
);

const inverted = invertTree(root);

// Helper: level-order print for visual check
const printTree = (node) => {
    const queue = [node];
    const result = [];

    while (queue.length) {
        const current = queue.shift();
        if (current) {
            result.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        } else {
            result.push(null);
        }
    }

    console.log("Inverted Tree:", result);
};

printTree(inverted);

