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
var bstToGst = function(root) {
    // 0. Reverse inorder (right→node→left) maintaining running sum
    let run = 0;
    const dfs = (node) => {
        if (!node) return;
        dfs(node.right);
        run += node.val;
        node.val = run;
        dfs(node.left);
    };
    dfs(root);
    return root;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//      4
//     / \
//    1   6
const root4 = new TreeNode(4, new TreeNode(1), new TreeNode(6));
bstToGst(root4);
// After GST, inorder values (original 1,4,6) -> (11,10,6)
const inorderVals = [];
const inorder = (n)=>{ if(!n) return; inorder(n.left); inorderVals.push(n.val); inorder(n.right); };
inorder(root4);
console.log("GST inorder:", inorderVals); // e.g., [11, 10, 6]
