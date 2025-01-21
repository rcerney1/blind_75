/* stacks */
// functions: push, pop, peek, length

let letters = []; // this is our stack

let word = 'racecar'

let rword = ''

//put letters of word into stack
for(let i = 0; i < word.length; i++) {
    letters.push(word[i])
}

//pop letters into rword (reversed word)
for (let i = 0; i < word.length; i++){
    rword += letters.pop();
}

//check if word is a palindrome
if (rword === word) {
    console.log( word + " is a palindrome")
}