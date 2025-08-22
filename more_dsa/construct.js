/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 0. Intuition: Preorder gives us the root, inorder tells us left vs right
    // 1. Use a hashmap to quickly find root index in inorder
    // 2. Recurse into left and right partitions

    // Time: O(n)
    // Space: O(n)

    const inorderIndexMap = new Map();
    inorder.forEach((val, i) => inorderIndexMap.set(val, i));

    let preorderIndex = 0;

    const helper = (left, right) => {
        if (left > right) return null;

        // pick current root from preorder
        const rootVal = preorder[preorderIndex++];
        const root = new TreeNode(rootVal);

        // build subtrees using inorder split
        const index = inorderIndexMap.get(rootVal);
        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    };

    return helper(0, inorder.length - 1);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input:
// Preorder = [3,9,20,15,7]
// Inorder  = [9,3,15,20,7]
// Output Tree:
//       3
//      / \
//     9  20
//        / \
//       15  7

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];

const root = buildTree(preorder, inorder);
console.log("Root:", root); // root of constructed tree
