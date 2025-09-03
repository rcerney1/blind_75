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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // 0. Intuition: Use BST rules to locate node, then handle 3 cases:
    //    1. Node not found → return root
    //    2. Node with 0 or 1 child → replace with child
    //    3. Node with 2 children → replace with inorder successor

    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Found node
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Both children exist → find inorder successor
        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Build BST:
//       5
//      / \
//     3   6
//    / \    \
//   2   4    7
const root = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2),
        new TreeNode(4)
    ),
    new TreeNode(6,
        null,
        new TreeNode(7)
    )
);

console.log("Before deletion:", root);
const newRoot = deleteNode(root, 3); // delete node with value 3
console.log("After deletion:", newRoot);
