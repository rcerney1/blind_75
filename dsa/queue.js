// queues are like stacks except its first in first out

class myQueue{
    constructor(){
        let collection = []

        this.print = function(){
            console.log(collection)
        }

        this.enqueue = function(element){
            collection.push(element)
        }

        this.dequeue = function(){
            return collection.shift();
        }

        this.front = function(){
            return collection[0]
        }

        this.size = function() {
            return collection.length;
        }

        this.isEmpty = function(){
            return (collection.length === 0);
        }
    }
}