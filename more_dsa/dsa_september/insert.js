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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    // 0. Standard BST insert
    if (!root) return new TreeNode(val);
    let curr = root;
    while (true) {
        if (val < curr.val) {
            if (!curr.left) { curr.left = new TreeNode(val); break; }
            curr = curr.left;
        } else {
            if (!curr.right) { curr.right = new TreeNode(val); break; }
            curr = curr.right;
        }
    }
    return root;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
const root2 = new TreeNode(4, new TreeNode(2), new TreeNode(7));
insertIntoBST(root2, 5);
// Tree now has 5 as left child of 7
console.log(JSON.stringify(root2)); 
