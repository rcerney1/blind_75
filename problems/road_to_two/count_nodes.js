
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {

    const getHeight = (node, goLeft) => {
        let height = 0;
        while (node) {
            height++;
            node = goLeft ? node.left : node.right;
        }
        return height;
    };

    if (!root) return 0;

    const leftHeight = getHeight(root, true);
    const rightHeight = getHeight(root, false);

    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1; // perfect tree
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
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
    new TreeNode(3,
        new TreeNode(6),
        null
    )
);

console.log(countNodes(root)); 
// Output: 6
