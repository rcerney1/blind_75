/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    // 0. Intuition: Use BFS, assign indices to nodes as if complete tree
    // 1. At each level, width = lastIndex - firstIndex + 1

    // Time O(n)
    // Space O(n)

    let maxWidth = 0;
    const queue = [[root, 0]]; // [node, index]

    while (queue.length > 0) {
        const levelSize = queue.length;
        const baseIndex = queue[0][1];
        let first = 0, last = 0;

        for (let i = 0; i < levelSize; i++) {
            const [node, index] = queue.shift();
            const normalizedIndex = index - baseIndex;

            if (i === 0) first = normalizedIndex;
            if (i === levelSize - 1) last = normalizedIndex;

            if (node.left) queue.push([node.left, 2 * normalizedIndex]);
            if (node.right) queue.push([node.right, 2 * normalizedIndex + 1]);
        }

        maxWidth = Math.max(maxWidth, last - first + 1);
    }

    return maxWidth;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1,
    new TreeNode(3,
        new TreeNode(5),
        new TreeNode(3)
    ),
    new TreeNode(2,
        null,
        new TreeNode(9)
    )
);

console.log(widthOfBinaryTree(root)); 

