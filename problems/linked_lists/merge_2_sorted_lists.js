// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

class Solution {
    mergeTwoLists(list1, list2) {
        // Create a dummy node to simplify edge cases
        let dummy = new ListNode(0);
        let current = dummy;
        
        // Use two pointers to traverse both lists
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next; // Move the current pointer forward
        }

        // If there are remaining nodes in either list, attach them
        if (list1 !== null) {
            current.next = list1;
        } else if (list2 !== null) {
            current.next = list2;
        }
        
        // Return the merged list, skipping the dummy node
        return dummy.next;
    }
}

// Helper function to create a linked list from an array
function arrayToList(arr) {
    let head = null;
    let tail = null;
    for (let val of arr) {
        let newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }
    return head;
}

// Helper function to convert linked list to an array (for easy testing)
function listToArray(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Example usage
const sol = new Solution();
let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);
let mergedList = sol.mergeTwoLists(list1, list2);
console.log(listToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]
