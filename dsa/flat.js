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
var flatten = function(root) {
    // 0. Intuition: Use reverse postorder traversal (right → left → root)
    // 1. Track previous node to rewire right pointers

    // Time O(n)
    // Space O(h)

    let prev = null;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.right);
        dfs(node.left);

        node.right = prev;
        node.left = null;
        prev = node;
    };

    dfs(root);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//      1
//     / \
//    2   5
//   / \   \
//  3   4   6

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3),
        new TreeNode(4)
    ),
    new TreeNode(5,
        null,
        new TreeNode(6)
    )
);

flatten(root);

// Print flattened list
let node = root;
const result = [];
while (node) {
    result.push(node.val);
    node = node.right;
}
console.log(result); 
// Output: [1, 2, 3, 4, 5, 6]
