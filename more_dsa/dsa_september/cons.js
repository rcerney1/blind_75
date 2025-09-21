/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    // 0. Use bounds to place nodes without slicing
    let i = 0;
    const build = (low, high) => {
        if (i === preorder.length) return null;
        const val = preorder[i];
        if (val < low || val > high) return null;
        i++;
        const node = new TreeNode(val);
        node.left = build(low, val);
        node.right = build(val, high);
        return node;
    };
    return build(-Infinity, Infinity);
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
const pre4 = [8,5,1,7,10,12];
const root4 = bstFromPreorder(pre4);
// Should form BST with 8 as root, 5 left, 10 right, etc.
console.log(JSON.stringify(root4));
