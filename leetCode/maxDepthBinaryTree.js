function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const maxDepth = function(root) {
    if (!root) return 0;

    let depth = 0;
    let queue = [root];

    while (queue.length > 0) {
        let len = queue.length;
        depth++;  // Increment depth for each level

        for (let i = 0; i < len; i++) {
            let current = queue.shift();  // Removes the front of the queue
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    return depth;
};
