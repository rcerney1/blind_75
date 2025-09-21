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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    // 0. Build two stacks: predecessors (< target) and successors (>= target)
    // 1. Then extract k values by comparing top of both stacks

    const pushPredecessors = (node) => {
        while (node) {
            if (node.val < target) {
                pre.push(node);
                node = node.right;
            } else {
                node = node.left;
            }
        }
    };
    const pushSuccessors = (node) => {
        while (node) {
            if (node.val >= target) {
                suc.push(node);
                node = node.left;
            } else {
                node = node.right;
            }
        }
    };
    const getPrev = () => {
        const node = pre.pop();
        let p = node.left;
        while (p) {
            pre.push(p);
            p = p.right;
        }
        return node.val;
    };
    const getNext = () => {
        const node = suc.pop();
        let p = node.right;
        while (p) {
            suc.push(p);
            p = p.left;
        }
        return node.val;
    };

    const pre = [], suc = [];
    pushPredecessors(root);
    pushSuccessors(root);

    const res = [];
    while (k-- > 0) {
        if (!pre.length) res.push(getNext());
        else if (!suc.length) res.push(getPrev());
        else {
            const pv = pre[pre.length - 1].val;
            const sv = suc[suc.length - 1].val;
            if (Math.abs(pv - target) <= Math.abs(sv - target)) res.push(getPrev());
            else res.push(getNext());
        }
    }
    return res;
};

// Example
function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
//        8
//       / \
//      5  12
//     / \   \
//    3   6   14
const root1 = new TreeNode(8,
  new TreeNode(5, new TreeNode(3), new TreeNode(6)),
  new TreeNode(12, null, new TreeNode(14))
);
console.log(closestKValues(root1, 7.2, 3)); // e.g., [6,8,5] or [6,8,5]
