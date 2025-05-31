
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {

    let count = 0;

    const dfs = (node, maxSoFar) => {
        if (!node) return;

        if (node.val >= maxSoFar) {
            count++;
        }

        const newMax = Math.max(maxSoFar, node.val);
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    };

    dfs(root, root.val);
    return count;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(3,
    new TreeNode(1,
        new TreeNode(3)
    ),
    new TreeNode(4,
        new TreeNode(1),
        new TreeNode(5)
    )
);

console.log(goodNodes(root)); 
// Output: 4 (good nodes are 3, 3, 4, 5)
