
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0;

    const depth = (node) => {
        if (!node) return 0;
        const left = depth(node.left);
        const right = depth(node.right);
        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    };

    depth(root);
    return diameter;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

console.log(diameterOfBinaryTree(root)); // Output: 3
// Explanation: Longest path is [4,2,1,3] or [5,2,1,3] => 3 edges
