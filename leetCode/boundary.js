
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    if (!root) return [];

    const result = [root.val];

    const isLeaf = (node) => !node.left && !node.right;

    const addLeftBoundary = (node) => {
        while (node) {
            if (!isLeaf(node)) result.push(node.val);
            node = node.left || node.right;
        }
    };

    const addLeaves = (node) => {
        if (!node) return;
        if (isLeaf(node)) {
            result.push(node.val);
            return;
        }
        addLeaves(node.left);
        addLeaves(node.right);
    };

    const addRightBoundary = (node) => {
        const stack = [];
        while (node) {
            if (!isLeaf(node)) stack.push(node.val);
            node = node.right || node.left;
        }
        while (stack.length) {
            result.push(stack.pop());
        }
    };

    if (root.left) addLeftBoundary(root.left);
    addLeaves(root);
    if (root.right) addRightBoundary(root.right);

    return result;
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
        new TreeNode(5,
            new TreeNode(7),
            new TreeNode(8)
        )
    ),
    new TreeNode(3,
        new TreeNode(6),
        new TreeNode(9,
            null,
            new TreeNode(10)
        )
    )
);

console.log(boundaryOfBinaryTree(root));
// Output: [1, 2, 4, 7, 8, 6, 10, 9, 3]
