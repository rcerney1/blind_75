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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 0. Intuition: Use DFS to explore the tree
    // 1. If node is null OR node is p OR node is q → return node
    // 2. Recurse left and right
    // 3. If both sides return non-null → this node is LCA
    // 4. Else return whichever side is non-null

    // Time: O(n)
    // Space: O(h)

    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left || right;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//        3
//       / \
//      5   1
//     / \ / \
//    6  2 0  8
//      / \
//     7   4

const root = new TreeNode(3,
    new TreeNode(5,
        new TreeNode(6),
        new TreeNode(2,
            new TreeNode(7),
            new TreeNode(4)
        )
    ),
    new TreeNode(1,
        new TreeNode(0),
        new TreeNode(8)
    )
);

const p = root.left; // Node 5
const q = root.left.right.right; // Node 4

const lca = lowestCommonAncestor(root, p, q);
console.log("LCA:", lca.val); // Output: 5
