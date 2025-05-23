
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const validate = (node, min, max) => {
        if (!node) return true;
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };

    return validate(root, null, null);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(2,
    new TreeNode(1),
    new TreeNode(3)
);

console.log(isValidBST(root)); // Output: true

const invalidBST = new TreeNode(5,
    new TreeNode(1),
    new TreeNode(4,
        new TreeNode(3),
        new TreeNode(6)
    )
);

console.log(isValidBST(invalidBST)); // Output: false
