/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    // 0. BFS with column index (root at 0)
    // 1. Track min/max column, store values per column
    if (!root) return [];
    const map = new Map(); // col -> array
    const queue = [[root, 0]];
    let minC = 0, maxC = 0;

    while (queue.length) {
        const [node, c] = queue.shift();
        if (!map.has(c)) map.set(c, []);
        map.get(c).push(node.val);
        minC = Math.min(minC, c);
        maxC = Math.max(maxC, c);
        if (node.left) queue.push([node.left, c - 1]);
        if (node.right) queue.push([node.right, c + 1]);
    }

    const res = [];
    for (let c = minC; c <= maxC; c++) res.push(map.get(c) || []);
    return res;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//       3
//      / \
//     9  20
//        / \
//       15  7
const root5 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log("Vertical order:", verticalOrder(root5)); // [[9],[3,15],[20],[7]]
