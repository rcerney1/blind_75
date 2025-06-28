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
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    // 0. Intuition: Postorder DFS to evaluate children first
    // 1. At each node, check if both subtrees are univalue and match current value
    // 2. Count it if so

    // Time O(n)
    // Space O(n)

    let count = 0;

    const isUnivalue = (node) => {
        if (!node) return true;

        const left = isUnivalue(node.left);
        const right = isUnivalue(node.right);

        if (!left || !right) return false;
        if (node.left && node.left.val !== node.val) return false;
        if (node.right && node.right.val !== node.val) return false;

        count++;
        return true;
    };

    isUnivalue(root);
    return count;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(5,
    new TreeNode(1,
        new TreeNode(5),
        new TreeNode(5)
    ),
    new TreeNode(5,
        null,
        new TreeNode(5)
    )
);

console.log(countUnivalSubtrees(root)); 
// Output: 4
// Univalue subtrees: all leaf 5s, right 5->5, and left 5
