/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val; this.left = left; this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    // 0. Inorder traversal yields non-decreasing sequence
    // 1. Track streaks without extra map
    let prev = null, count = 0, best = 0;
    const modes = [];

    const handle = (v) => {
        if (prev === null || v !== prev) count = 0;
        count++;
        if (count > best) {
            best = count;
            modes.length = 0;
            modes.push(v);
        } else if (count === best) {
            modes.push(v);
        }
        prev = v;
    };

    const inorder = (n) => {
        if (!n) return;
        inorder(n.left);
        handle(n.val);
        inorder(n.right);
    };

    inorder(root);
    return modes;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
// BST with duplicates:   2
//                       / \
//                      1   2
const r5 = new TreeNode(2, new TreeNode(1), new TreeNode(2));
console.log("Modes:", findMode(r5)); // [2]
