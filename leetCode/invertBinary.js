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
var invertTree = function(root) {
    // 0. Intuition: Use recursion to swap left and right nodes
    // 1. Base case: return null if node is null
    // 2. Recursively invert left and right subtrees
    // 3. Swap them

    // Time O(n)
    // Space O(n)

    if (!root) return null;

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

const inverted = invertTree(root);

const levelOrder = (root) => {
    if (!root) return [];
    let queue = [root], result = [];

    while (queue.length) {
        let node = queue.shift();
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
};

console.log(levelOrder(inverted)); 
// Output: [4, 7, 2, 9, 6, 3, 1]
