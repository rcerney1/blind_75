/**
 * Definition for a Node (with .next).
 * function Node(val, left = null, right = null, next = null) {
 *   this.val = val; this.left = left; this.right = right; this.next = next;
 * }
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connectAny = function(root) {
    // 0. Iterate level by level using a dummy head to stitch next layer (O(1) space)
    let curr = root;

    while (curr) {
        const dummy = new Node(0);
        let tail = dummy;

        while (curr) {
            if (curr.left)  { tail.next = curr.left;  tail = tail.next; }
            if (curr.right) { tail.next = curr.right; tail = tail.next; }
            curr = curr.next;
        }
        curr = dummy.next;
    }
    return root;
};

// Example
function Node(val, left = null, right = null, next = null) { this.val = val; this.left = left; this.right = right; this.next = next; }
const q1 = new Node(1,
  new Node(2, null, new Node(5)),
  new Node(3, null, new Node(7))
);
connectAny(q1);
// Level 2 next chain: 2 -> 3
console.log(q1.left.next.val); // 3
