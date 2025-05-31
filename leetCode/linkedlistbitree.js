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
    // 0. Intuition: Reverse post-order traversal (right -> left -> root)
    // 1. Keep a prev pointer and rewire right pointers during traversal
    // 2. Set left pointers to null

    // Time O(n)
    // Space O(n) due to recursion stack

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

// Traverse and print the flattened list
let node = root;
let result = [];
while (node) {
    result.push(node.val);
    node = node.right;
}
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
