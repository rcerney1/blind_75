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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 0. Intuition: Inorder traversal of BST yields sorted values
    // 1. Do iterative inorder and count nodes until we hit k
    // 2. Return the k-th visited value

    // Time: O(h + k) average (O(n) worst)
    // Space: O(h) for the stack

    const stack = [];
    let curr = root;

    while (curr || stack.length) {
        // go left as far as possible
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        k--;
        if (k === 0) return curr.val; // k-th smallest found
        curr = curr.right;
    }

    // If k is invalid (shouldn't happen in valid inputs)
    return -1;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Build BST:
//        5
//       / \
//      3   7
//     / \   \
//    2   4   8
//   /
//  1
const root = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2,
            new TreeNode(1)
        ),
        new TreeNode(4)
    ),
    new TreeNode(7,
        null,
        new TreeNode(8)
    )
);

console.log("k=1:", kthSmallest(root, 1)); // 1
console.log("k=3:", kthSmallest(root, 3)); // 3
console.log("k=5:", kthSmallest(root, 5)); // 5
console.log("k=7:", kthSmallest(root, 7)); // 8
