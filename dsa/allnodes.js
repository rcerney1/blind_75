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
    // 0. Intuition: Convert to undirected graph and BFS from target
    // 1. First, build parent map to allow upward movement
    // 2. Then BFS to find nodes at distance k

    // Time O(n)
    // Space O(n)

    const parentMap = new Map();

    const buildParentMap = (node, parent = null) => {
        if (!node) return;
        if (parent) parentMap.set(node, parent);
        buildParentMap(node.left, node);
        buildParentMap(node.right, node);
    };

    buildParentMap(root);

    const visited = new Set();
    const queue = [[target, 0]];
    const result = [];

    while (queue.length > 0) {
        const [node, dist] = queue.shift();

        if (visited.has(node)) continue;
        visited.add(node);

        if (dist === k) {
            result.push(node.val);
            continue;
        }

        if (node.left) queue.push([node.left, dist + 1]);
        if (node.right) queue.push([node.right, dist + 1]);
        if (parentMap.has(node)) queue.push([parentMap.get(node), dist + 1]);
    }

    return result;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(3,
    new TreeNode(5,
        new TreeNode(6),
        new TreeNode(2,
            new TreeNode(7),
            new TreeNode(4)
        )
    ),
    new TreeNode(1,
        new TreeNode(0),
        new TreeNode(8)
    )
);

const target = root.left; // Node 5
console.log(distanceK(root, target, 2));
// Output: [7, 4, 1]
s
