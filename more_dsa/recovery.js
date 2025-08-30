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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    // 0. Intuition: Inorder traversal of BST should be sorted
    // 1. Find two misplaced nodes while traversing
    // 2. Swap their values

    // Time: O(n)
    // Space: O(h)

    let first = null, second = null, prev = null;

    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);

        if (prev && prev.val > node.val) {
            if (!first) {
                first = prev;
            }
            second = node;
        }
        prev = node;

        inorder(node.right);
    };

    inorder(root);

    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input BST (invalid because 1 and 3 are swapped):
//        3
//       / \
//      1   4
//         /
//        2
const root = new TreeNode(3,
    new TreeNode(1),
    new TreeNode(4,
        new TreeNode(2)
    )
);

console.log("Before recovery:", root);
recoverTree(root);
console.log("After recovery:", root);
// Output should fix tree to:
//        2
//       / \
//      1   4
//         /
//        3
