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
    // 0. Intuition: Standard BST deletion
    // 1. Find node → delete it
    //    a. No children → return null
    //    b. One child → return that child
    //    c. Two children → find inorder successor (min of right), swap, delete again

    // Time O(h), h = height of tree
    // Space O(h) recursion stack

    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Found node to delete
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Replace with inorder successor
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

const updatedRoot = deleteNode(root, 3);

// Inorder traversal to verify
const inorder = (node, res = []) => {
    if (!node) return res;
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
    return res;
};

console.log(inorder(updatedRoot)); 

