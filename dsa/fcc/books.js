//stacks are a lifo service
//first in first out

//functions: push, pop, peek, length
//array object has these functions built in

let letters = [];

let word = "racecar";

let rword = '';

for (let i=0; i < word.length; i++){
    letters.push(word[i]);
}

console.log(letters);

for (let i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(rword === word) {
    console.log(`${word} is a palimdrome`)
} else {
    console.log("its not")
}



//Creates a stack
let Stack = function() {
    this.count = 0;
    this.storage = {};

    //adds a value to the end of a stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //pops a value off the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //return size of stack
    this.size = function(){
        return this.count;
    }
}