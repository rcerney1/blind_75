//  Given an integer array nums and an integer k, return the k most frequent elements.
//  You may return the answer in any order.

class Solution{
    freqElement(nums, k){
        // Optimal solution: Hashmap of frequencies + bucket sort
        // 0(n) time & space

        //create hashmap
        const counts = {}
        
        // fill in hashmap
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        //create buckets that hold nums.length number of arrays + 1
        const buckets =  new Array(nums.length)

        for (let num in counts) {
            let count = counts[num];
            if (!buckets[count]) {
                buckets[count] = [];
            }
            buckets[count].push(num);
        }

        console.log(buckets)


        const res = [];
        let copyK = k;

        //iterate through buckets and push k number of ints to res 
        for (let j = buckets.length; j >= 0; j--){
            if(buckets[j]) {
                for (let z = 0; z < buckets[j].length; z++){
                    let item = buckets[j][z];
                    res.push(item)
                    copyK--;
                    if(copyK === 0) return res;
                }
            }
        }

        return res;

    }
}

const sol = new Solution();

console.log(sol.freqElement([1, 1, 1, 3, 4, 4, 4], 2))
