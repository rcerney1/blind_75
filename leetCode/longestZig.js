/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    // 0. Intuition: DFS, tracking direction and path length
    // 1. On left move, next must be right; and vice versa
    // 2. Reset count if not alternating

    // Time O(n)
    // Space O(n)

    let maxLen = 0;

    const dfs = (node, isLeft, length) => {
        if (!node) return;
        maxLen = Math.max(maxLen, length);

        if (isLeft) {
            dfs(node.left, false, 1);         // switch direction
            dfs(node.right, true, length + 1); // continue zigzag
        } else {
            dfs(node.right, true, 1);         // switch direction
            dfs(node.left, false, length + 1); // continue zigzag
        }
    };

    dfs(root.left, true, 1);
    dfs(root.right, false, 1);

    return maxLen;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    null,
    new TreeNode(1,
        new TreeNode(1),
        new TreeNode(1,
            new TreeNode(1,
                null,
                new TreeNode(1)
            ),
            null
        )
    )
);

console.log(longestZigZag(root)); 
// Output: 3
