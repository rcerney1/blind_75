function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


const isValidBst = (root) => {
    function recurse(root, min, max) {
        if (root === null) return true;

        if(root.val >= max || root.val <= min) return false;

        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max);
    }
    return recurse(root, -Infinity, Infinity)
}

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));


console.log(isValidBst(tree2))