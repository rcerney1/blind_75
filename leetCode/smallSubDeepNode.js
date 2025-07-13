
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    // 0. Intuition: Use postorder DFS to return both depth and subtree
    // 1. If left and right depths are equal → current node is LCA
    // 2. Else return deeper side's subtree

    // Time O(n)
    // Space O(n)

    const dfs = (node) => {
        if (!node) return [0, null]; // [depth, subtree]

        const [leftDepth, leftNode] = dfs(node.left);
        const [rightDepth, rightNode] = dfs(node.right);

        if (leftDepth === rightDepth) {
            return [leftDepth + 1, node];
        } else if (leftDepth > rightDepth) {
            return [leftDepth + 1, leftNode];
        } else {
            return [rightDepth + 1, rightNode];
        }
    };

    return dfs(root)[1];
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

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

const result = subtreeWithAllDeepest(root);
console.log(result.val); 
// Output: 2
// Deepest nodes: 7 and 4 → their LCA is 2
