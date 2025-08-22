/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 0. Intuition: Middle element of array = root
    // 1. Left half forms left subtree
    // 2. Right half forms right subtree
    // 3. Recurse until array empty

    // Time: O(n)
    // Space: O(log n) avg recursion depth

    const build = (left, right) => {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    };

    return build(0, nums.length - 1);
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const nums = [-10, -3, 0, 5, 9];

const root = sortedArrayToBST(nums);
console.log("BST Root:", root);
// Expected Output Tree (one possible form):
//       0
//      / \
//   -10   5
//     \     \
//     -3     9
