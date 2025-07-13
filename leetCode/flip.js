
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    // 0. Intuition: Recursively compare two trees
    // 1. Either children match normally, or match after flipping
    // 2. Return true if either arrangement works

    // Time O(n)
    // Space O(h)

    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;

    const noFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    const flip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    return noFlip || flip;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5,
            new TreeNode(7),
            new TreeNode(8)
        )
    ),
    new TreeNode(3)
);

const root2 = new TreeNode(1,
    new TreeNode(3),
    new TreeNode(2,
        new TreeNode(5,
            new TreeNode(8),
            new TreeNode(7)
        ),
        new TreeNode(4)
    )
);

console.log(flipEquiv(root1, root2)); 
// Output: true
