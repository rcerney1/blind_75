
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const nodeList = [];

    const dfs = (node, row, col) => {
        if (!node) return;
        nodeList.push([col, row, node.val]);
        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    };

    dfs(root, 0, 0);

    nodeList.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]; // column
        if (a[1] !== b[1]) return a[1] - b[1]; // row
        return a[2] - b[2];                    // value
    });

    const result = [];
    let lastCol = -Infinity;

    for (const [col, row, value] of nodeList) {
        if (col !== lastCol) {
            result.push([]);
            lastCol = col;
        }
        result[result.length - 1].push(value);
    }

    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(verticalTraversal(root));
// Output: [[9], [3, 15], [20], [7]]
