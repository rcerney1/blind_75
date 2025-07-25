/**
 * Definition for a binary tree node / doubly linked list node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode} (head of doubly linked list)
 */
var treeToDoublyList = function(root) {
    // 0. Intuition: Use in-order traversal to stitch nodes together
    // 1. Maintain previous node and head of the DLL
    // 2. Link current node with previous, keep tracking

    // Time O(n)
    // Space O(h)

    if (!root) return null;

    let head = null;
    let prev = null;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.left);

        if (prev) {
            prev.right = node;
            node.left = prev;
        } else {
            head = node;
        }

        prev = node;

        dfs(node.right);
    };

    dfs(root);
    return head;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

//         4
//       /   \
//      2     5
//     / \
//    1   3

const root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(5)
);

const head = treeToDoublyList(root);

// Print list forward
let curr = head;
const result = [];
while (curr) {
    result.push(curr.val);
    if (!curr.right) break;
    curr = curr.right;
}
console.log(result); // Output: [1, 2, 3, 4, 5]
