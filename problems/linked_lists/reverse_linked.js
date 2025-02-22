// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

class Solution {
    reverseList(head) {
        let prev = null;
        let current = head;
        
        while (current !== null) {
            let nextTemp = current.next;  // store next node
            current.next = prev;          // reverse current node's pointer
            prev = current;               // move prev and current one step forward
            current = nextTemp;
        }
        
        return prev; // prev will be the new head of the reversed list
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
let list = arrayToList([1, 2, 3, 4, 5]);
let reversedList = sol.reverseList(list);
console.log(listToArray(reversedList)); // Output: [5, 4, 3, 2, 1]
