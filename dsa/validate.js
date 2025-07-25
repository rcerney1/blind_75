/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    // 0. Intuition: Use slot counting (each node consumes 1 slot and adds 2 if not null)
    // 1. Start with 1 slot for the root
    // 2. For each node, consume a slot
    //    - If not '#', add 2 slots (for children)
    // 3. Slots must be exactly 0 at the end

    // Time O(n)
    // Space O(1)

    const nodes = preorder.split(',');
    let slots = 1;

    for (const node of nodes) {
        if (slots === 0) return false;

        slots--;

        if (node !== '#') {
            slots += 2;
        }
    }

    return slots === 0;
};

// Example test cases
console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")); // true
console.log(isValidSerialization("1,#"));                      // false
console.log(isValidSerialization("9,#,#,1"));                  // false
