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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    // 0. Build parent pointers, then BFS from target outwards up to K
    const parent = new Map();

    const buildParents = (node, par = null) => {
        if (!node) return;
        if (par) parent.set(node, par);
        buildParents(node.left, node);
        buildParents(node.right, node);
    };
    buildParents(root, null);

    const seen = new Set([target]);
    const queue = [[target, 0]];
    const res = [];

    while (queue.length) {
        const [node, d] = queue.shift();
        if (d === k) res.push(node.val);
        if (d > k) break;

        for (const nei of [node.left, node.right, parent.get(node)]) {
            if (nei && !seen.has(nei)) {
                seen.add(nei);
                queue.push([nei, d + 1]);
            }
        }
    }
    return res;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//      3
//     / \
//    5   1
//   / \ / \
//  6  2 0  8
//    / \
//   7   4
const root2 = new TreeNode(3,
  new TreeNode(5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);
const target2 = root2.left; // 5
console.log("Distance 2 from 5:", distanceK(root2, target2, 2)); // [7,4,1]
