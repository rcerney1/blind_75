/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val; this.left = left; this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    // 0. Special case depth=1 → new root
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    const queue = [root];
    let currDepth = 1;

    while (queue.length) {
        const size = queue.length;
        if (currDepth === depth - 1) {
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                const L = new TreeNode(val);
                const R = new TreeNode(val);
                L.left = node.left;
                R.right = node.right;
                node.left = L;
                node.right = R;
            }
            break;
        }
        for (let i = 0; i < size; i++) {
            const n = queue.shift();
            if (n.left) queue.push(n.left);
            if (n.right) queue.push(n.right);
        }
        currDepth++;
    }
    return root;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
const r4 = new TreeNode(4, new TreeNode(2), new TreeNode(6));
addOneRow(r4, 1, 2);
// After: new nodes with val=1 inserted as children of root
console.log(r4.left.val, r4.right.val); // 1 1
