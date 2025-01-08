// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', 
// and they can appear in both lower and upper cases, more than once.

class Solution{
    reverseString(string){
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        const strArray = string.split("");

        //create two pointers
        let left = 0;
        let right = strArray.length - 1;

        while (left < right) {
            // Move left pointer until it points to a vowel
            while (left < right && !vowels.has(strArray[left])) {
                left++;
            }
            // Move right pointer until it points to a vowel
            while (left < right && !vowels.has(strArray[right])) {
                right--;
            }
            // Swap the vowels
            [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
            left++;
            right--;
        }

        return strArray.join('');
    }
}

const sol = new Solution();
console.log(sol.reverseString("WoMa"))
