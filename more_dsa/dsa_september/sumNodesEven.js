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
var sumEvenGrandparent = function(root) {
    // 0. Pass parent and grandparent references in DFS
    let sum = 0;
    const dfs = (node, parent, grand) => {
        if (!node) return;
        if (grand && grand.val % 2 === 0) sum += node.val;
        dfs(node.left, node, parent);
        dfs(node.right, node, parent);
    };
    dfs(root, null, null);
    return sum;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//        6
//       / \
//      7   8
//     / \ / \
//    2  7 1  3
//      / \   \
//     9   1   5
const root5 = new TreeNode(6,
  new TreeNode(7,
    new TreeNode(2),
    new TreeNode(7, new TreeNode(9), new TreeNode(1))
  ),
  new TreeNode(8,
    new TreeNode(1),
    new TreeNode(3, null, new TreeNode(5))
  )
);
console.log("Sum (even grandparents):", sumEvenGrandparent(root5)); // 18
