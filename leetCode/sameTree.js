function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const sameTree = (p, q) => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return sameTree(p.left, q.left) && sameTree(p.right, q.right);
};

// Correctly initialize the trees
const one = new TreeNode(1, new TreeNode(2), new TreeNode(4));
const two = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(sameTree(one, two)); // Output: false

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(sameTree(tree1, tree2)); // Output: true

