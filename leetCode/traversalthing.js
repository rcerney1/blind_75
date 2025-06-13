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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 0. Intuition: Preorder gives root, Inorder gives left/right splits
    // 1. Use recursion: root is preorder[0], split inorder around root
    // 2. Slice preorder/inorder arrays accordingly

    // Time O(n)
    // Space O(n)

    if (!preorder.length || !inorder.length) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const mid = inorder.indexOf(rootVal);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];

const tree = buildTree(preorder, inorder);

// Print tree as level order
const levelOrder = (root) => {
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    return result;
};

console.log(levelOrder(tree)); 
// Output: [3, 9, 20, null, null, 15, 7]
