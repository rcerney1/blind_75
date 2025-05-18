
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }

    return null;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(6,
    new TreeNode(2,
        new TreeNode(0),
        new TreeNode(4,
            new TreeNode(3),
            new TreeNode(5)
        )
    ),
    new TreeNode(8,
        new TreeNode(7),
        new TreeNode(9)
    )
);

const p = root.left;        // 2
const q = root.left.right;  // 4

const lca = lowestCommonAncestor(root, p, q);
console.log(lca.val); // Output: 2
