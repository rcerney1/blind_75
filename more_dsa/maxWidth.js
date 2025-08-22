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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    // 0. Intuition: BFS with indices (like a heap index system)
    // 1. Assign index to each node: root=0, left=2*i, right=2*i+1
    // 2. For each level, width = rightmostIndex - leftmostIndex + 1
    // 3. Track max width

    // Time: O(n)
    // Space: O(n)

    if (!root) return 0;

    let maxWidth = 0;
    const queue = [[root, 0]]; // [node, index]

    while (queue.length) {
        const levelSize = queue.length;
        const firstIndex = queue[0][1];
        let lastIndex = firstIndex;

        for (let i = 0; i < levelSize; i++) {
            const [node, index] = queue.shift();
            lastIndex = index;

            if (node.left) queue.push([node.left, 2 * index]);
            if (node.right) queue.push([node.right, 2 * index + 1]);
        }

        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);
    }

    return maxWidth;
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
//      3   2
//     /     \
//    5       9
//   /         \
//  6           7

const root = new TreeNode(1,
    new TreeNode(3,
        new TreeNode(5,
            new TreeNode(6)
        )
    ),
    new TreeNode(2,
        null,
        new TreeNode(9,
            null,
            new TreeNode(7)
        )
    )
);

const result = widthOfBinaryTree(root);
console.log("Max Width:", result); // Output: 8
