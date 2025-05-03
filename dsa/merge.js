/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If nums2 is not exhausted, copy remaining elements
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};

// Example test case
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1,2,2,3,5,6]
