/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

var serializeBST = function(root) {
    // 0. Preorder traversal; join with commas
    const out = [];
    const pre = (n) => {
        if (!n) return;
        out.push(n.val);
        pre(n.left);
        pre(n.right);
    };
    pre(root);
    return out.join(",");
};

var deserializeBST = function(data) {
    // 0. Use bounds to rebuild BST in O(n) from preorder
    if (!data) return null;
    const vals = data.split(",").map(Number);
    let i = 0;

    const build = (low, high) => {
        if (i === vals.length) return null;
        const v = vals[i];
        if (v < low || v > high) return null;
        i++;
        const node = new TreeNode(v);
        node.left = build(low, v);
        node.right = build(v, high);
        return node;
    };

    return build(-Infinity, Infinity);
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
const root5 = new TreeNode(8,
  new TreeNode(5, new TreeNode(1), new TreeNode(7)),
  new TreeNode(10, null, new TreeNode(12))
);

const data = serializeBST(root5);
console.log("Serialized BST (preorder):", data);
const restored = deserializeBST(data);
console.log("Restored root:", restored.val); // 8
