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
    // 0. Intuition: Inorder of BST should be sorted
    // 1. Do inorder traversal, track two nodes where order breaks
    // 2. Swap their values at the end

    // Time O(n)
    // Space O(h)

    let first = null, second = null, prev = null;

    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);

        if (prev && node.val < prev.val) {
            if (!first) first = prev;
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

// Tree with swapped nodes: [1,3,null,null,2]
// Should be: [3,1,null,null,2]
const root = new TreeNode(1,
    new TreeNode(3,
        null,
        new TreeNode(2)
    )
);

recoverTree(root);

// Inorder traversal to verify fix
const inorder = (node, res = []) => {
    if (!node) return res;
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
    return res;
};

console.log(inorder(root)); 
// Output: [1, 2, 3] — Corrected BST
