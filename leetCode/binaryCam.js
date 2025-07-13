
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
    // 0. Intuition: Use postorder traversal to decide where to place cameras
    // 1. Each node can be in 1 of 3 states:
    //    a. 0: not covered
    //    b. 1: has a camera
    //    c. 2: covered by a child
    // 2. Place camera when child is 0 (not covered)

    // Time O(n)
    // Space O(n)

    let cameras = 0;

    const dfs = (node) => {
        if (!node) return 2; // null nodes are considered covered

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left === 0 || right === 0) {
            cameras++;
            return 1; // place camera
        }

        if (left === 1 || right === 1) {
            return 2; // covered by child's camera
        }

        return 0; // not covered
    };

    if (dfs(root) === 0) cameras++; // root is not covered, place a camera

    return cameras;
};

// Example test case
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(0,
    new TreeNode(0,
        new TreeNode(0),
        new TreeNode(0)
    ),
    null
);

console.log(minCameraCover(root)); 
// Output: 1
