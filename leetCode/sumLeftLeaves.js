/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
   if (!root) return 0;

    let sum = 0;

    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }

    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
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

console.log(sumOfLeftLeaves(root)); 
// Output: 24 (9 + 15)
