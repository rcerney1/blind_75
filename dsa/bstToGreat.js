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
var convertBST = function(root) {
    // 0. Intuition: Use reverse inorder (right → node → left)
    // 1. Keep a running sum and update each node’s value

    // Time O(n)
    // Space O(h)

    let sum = 0;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.right);

        sum += node.val;
        node.val = sum;

        dfs(node.left);
    };

    dfs(root);
    return root;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(4,
    new TreeNode(1),
    new TreeNode(6)
);

convertBST(root);

const inorder = (node, res = []) => {
    if (!node) return res;
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
    return res;
};

console.log(inorder(root)); 
// Output: [11, 15, 6]
// Original: [1, 4, 6] → Greater Tree: [11, 15, 6]
