// A pangram is a sentence where every letter 
// of the English alphabet appears at least once.

// Given a string sentence containing English letters (lower or upper-case), 
// return true if sentence is a pangram, or false otherwise.

// Note: The given sentence might contain other characters like digits or spaces, 
// your solution should handle these too.

class Solution {
    // Function to check if given sentence is pangram
    checkIfPangram(sentence) {
      // TODO: Write your code here
      const seen = new Set();
      
      for (let i = 0; i < sentence.length; i++) {
        const currLetter = sentence[i].toLowerCase();
        if(/[a-z]/.test(currLetter)){
            seen.add(currLetter)
        }
      }
      if(seen.size === 26) return true
      return false;
    }
  }


const sol = new Solution();
console.log(sol.checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"))