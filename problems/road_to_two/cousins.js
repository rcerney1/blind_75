

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {

    if (!root) return false;

    const queue = [[root, null]]; // [node, parent]

    while (queue.length > 0) {
        const size = queue.length;
        let xParent = null, yParent = null;

        for (let i = 0; i < size; i++) {
            const [node, parent] = queue.shift();

            if (node.val === x) xParent = parent;
            if (node.val === y) yParent = parent;

            if (node.left) queue.push([node.left, node]);
            if (node.right) queue.push([node.right, node]);
        }

        if (xParent && yParent) return xParent !== yParent;
        if (xParent || yParent) return false;
    }

    return false;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3, null, new TreeNode(5))
);

console.log(isCousins(root, 4, 5)); 

