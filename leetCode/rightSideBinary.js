/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let lastVal = null;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            lastVal = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(lastVal);
    }

    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(4))
);

console.log(rightSideView(root)); 
// Output: [1, 3, 4]
