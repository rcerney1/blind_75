/**
 * Definition for a BST node.
 * function TreeNode(val, left = null, right = null) {
 *   this.val = val; this.left = left; this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode} head of circular DLL
 */
var treeToDoublyList = function(root) {
    // 0. Inorder traversal to stitch nodes as prev<->next using left/right
    if (!root) return null;
    let head = null, prev = null;

    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        if (!head) head = node;
        if (prev) {
            prev.right = node;
            node.left = prev;
        }
        prev = node;
        dfs(node.right);
    };

    dfs(root);
    // make circular
    head.left = prev;
    prev.right = head;
    return head;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
const r3 = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(5)
);
const headDLL = treeToDoublyList(r3);
console.log([headDLL.val, headDLL.right.val, headDLL.right.right.val]); // [1,2,3]
