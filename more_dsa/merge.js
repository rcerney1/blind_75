/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // 0. Intuition: Recursively merge corresponding nodes
    // 1. If either is null, return the other
    // 2. If both exist, sum values and merge children

    // Time: O(n) — n is total nodes in both trees
    // Space: O(h) — recursion stack

    if (!root1) return root2;
    if (!root2) return root1;

    const merged = new TreeNode(root1.val + root2.val);
    merged.left = mergeTrees(root1.left, root2.left);
    merged.right = mergeTrees(root1.right, root2.right);

    return merged;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Tree 1:
//       1
//      / \
//     3   2
//    /
//   5
const t1 = new TreeNode(1,
    new TreeNode(3,
        new TreeNode(5)
    ),
    new TreeNode(2)
);

// Tree 2:
//       2
//      / \
//     1   3
//      \    \
//       4    7
const t2 = new TreeNode(2,
    new TreeNode(1,
        null,
        new TreeNode(4)
    ),
    new TreeNode(3,
        null,
        new TreeNode(7)
    )
);

const mergedRoot = mergeTrees(t1, t2);

// Helper: level-order print
const printTree = (node) => {
    const queue = [node];
    const result = [];
    while (queue.length) {
        const curr = queue.shift();
        if (curr) {
            result.push(curr.val);
            queue.push(curr.left);
            queue.push(curr.right);
        } else {
            result.push(null);
        }
    }
    console.log("Merged Tree:", result);
};

printTree(mergedRoot);
// Output: [3, 4, 5, 5, 4, null, 7]
