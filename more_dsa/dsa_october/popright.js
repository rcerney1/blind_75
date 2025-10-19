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
var connectPerfect = function(root) {
    // 0. Use leftmost pointer per level; connect child pairs & cross pairs
    if (!root) return null;
    let leftmost = root;

    while (leftmost.left) {
        let head = leftmost;
        while (head) {
            head.left.next = head.right;                    // same parent
            if (head.next) head.right.next = head.next.left; // across parents
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
};

// Example
function Node(val, left = null, right = null, next = null) { this.val = val; this.left = left; this.right = right; this.next = next; }
const p1 = new Node(1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7))
);
connectPerfect(p1);
// Level 2 next chain: 2 -> 3
console.log(p1.left.next.val); // 3
