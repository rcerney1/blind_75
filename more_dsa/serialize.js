/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

var serialize = function(root) {
    // 0. Intuition: Use BFS or DFS to store tree structure
    // 1. Represent null children as "null"
    // 2. Join values with commas

    if (!root) return "";

    const queue = [root];
    const result = [];

    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push("null");
        }
    }

    return result.join(",");
};

var deserialize = function(data) {
    // 0. Intuition: Use BFS to rebuild tree level-by-level
    // 1. Track position in data array for children assignment

    if (!data) return null;

    const values = data.split(",");
    const root = new TreeNode(parseInt(values[0]));
    const queue = [root];
    let i = 1;

    while (queue.length && i < values.length) {
        const node = queue.shift();

        if (values[i] !== "null") {
            node.left = new TreeNode(parseInt(values[i]));
            queue.push(node.left);
        }
        i++;

        if (values[i] !== "null") {
            node.right = new TreeNode(parseInt(values[i]));
            queue.push(node.right);
        }
        i++;
    }

    return root;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Input Tree:
//        1
//       / \
//      2   3
//         / \
//        4   5
const root = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3,
        new TreeNode(4),
        new TreeNode(5)
    )
);

const data = serialize(root);
console.log("Serialized:", data);

const restored = deserialize(data);
console.log("Deserialized Root:", restored);
