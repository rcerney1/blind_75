
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
   

    let sum = 0;

    const dfs = (node, parent, grandparent) => {
        if (!node) return;

        if (grandparent && grandparent.val % 2 === 0) {
            sum += node.val;
        }

        dfs(node.left, node, parent);
        dfs(node.right, node, parent);
    };

    dfs(root, null, null);
    return sum;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(6,
    new TreeNode(7,
        new TreeNode(2,
            new TreeNode(9)
        ),
        new TreeNode(7,
            new TreeNode(1),
            new TreeNode(4)
        )
    ),
    new TreeNode(8,
        new TreeNode(1),
        new TreeNode(3,
            null,
            new TreeNode(5)
        )
    )
);

console.log(sumEvenGrandparent(root));

