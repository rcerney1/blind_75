function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const levelOrder = (root) => {
    if (root === null) return [];

    let res = [];
    let queue = [root];

    while(queue.length) {
        let levelArr = [];
        let levelSize = queue.length;
        while(levelSize){
            let current = queue.shift();

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
    
            levelArr.push(current.val);
            levelSize--;
        }
        res.push(levelArr);
    }
    return res;
}


// Constructing the test tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Testing
console.log(levelOrder(root));