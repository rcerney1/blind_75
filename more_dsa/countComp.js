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
var countNodes = function(root) {
    // 0. Intuition: In a complete tree, we can count nodes faster than O(n)
    // 1. Compare leftmost and rightmost depths:
    //    - If equal → tree is perfect → nodes = 2^depth - 1
    //    - Else → recurse left + right + 1
    // 2. Cuts down traversal on perfect subtrees

    // Time: O((log n)^2)
    // Space: O(log n)

    if (!root) return 0;

    const getDepth = (node, goLeft) => {
        let depth = 0;
        while (node) {
            depth++;
            node = goLeft ? node.left : node.right;
        }
        return depth;
    };

    const leftDepth = getDepth(root, true);
    const rightDepth = getDepth(root, false);

    if (leftDepth === rightDepth) {
        return Math.pow(2, leftDepth) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree (complete):
//        1
//       / \
//      2   3
//     / \  /
//    4  5 6
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6)
    )
);

const result = countNodes(root);
console.log("Total nodes:", result); // Output: 6
