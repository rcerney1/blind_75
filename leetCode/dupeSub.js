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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    // 0. Intuition: Serialize each subtree as a string and track counts
    // 1. If the serialization is seen more than once, it's a duplicate
    // 2. Use postorder traversal

    // Time O(n)
    // Space O(n)

    const map = new Map();
    const result = [];

    const dfs = (node) => {
        if (!node) return "#";

        const left = dfs(node.left);
        const right = dfs(node.right);

        const serial = `${node.val},${left},${right}`;

        const count = map.get(serial) || 0;
        if (count === 1) {
            result.push(node);
        }
        map.set(serial, count + 1);

        return serial;
    };

    dfs(root);
    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4)
    ),
    new TreeNode(3,
        new TreeNode(2,
            new TreeNode(4)
        ),
        new TreeNode(4)
    )
);

const duplicates = findDuplicateSubtrees(root);
console.log(duplicates.map(node => node.val)); 
// Output: [2, 4]
// Explanation: Two subtrees are duplicated:
//     2
//    /
//   4
// and
//   4
