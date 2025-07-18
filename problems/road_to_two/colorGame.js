/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {

    let leftCount = 0, rightCount = 0;

    const count = (node) => {
        if (!node) return 0;

        const left = count(node.left);
        const right = count(node.right);

        if (node.val === x) {
            leftCount = left;
            rightCount = right;
        }

        return left + right + 1;
    };

    count(root);

    const parentCount = n - (leftCount + rightCount + 1);

    return Math.max(leftCount, rightCount, parentCount) > n / 2;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3,
        new TreeNode(4),
        new TreeNode(5)
    )
);

console.log(btreeGameWinningMove(root, 5, 3));

