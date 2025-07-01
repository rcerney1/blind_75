
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const idxMap = new Map();
    inorder.forEach((val, i) => idxMap.set(val, i));

    let postIdx = postorder.length - 1;

    const build = (left, right) => {
        if (left > right) return null;

        const rootVal = postorder[postIdx--];
        const root = new TreeNode(rootVal);

        const index = idxMap.get(rootVal);

        root.right = build(index + 1, right);
        root.left = build(left, index - 1);

        return root;
    };

    return build(0, inorder.length - 1);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const inorder = [9,3,15,20,7];
const postorder = [9,15,7,20,3];

const tree = buildTree(inorder, postorder);

// Inorder print to verify
const inorderPrint = (node, res = []) => {
    if (!node) return res;
    inorderPrint(node.left, res);
    res.push(node.val);
    inorderPrint(node.right, res);
    return res;
};

console.log(inorderPrint(tree)); 
// Output: [9, 3, 15, 20, 7]
