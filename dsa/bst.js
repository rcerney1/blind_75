//way to hold data that looks like a tree (wow crazy)
//each data point is called a node
//top of tree is a root node
//leaf nodes are nodes at end of tree with no children
//binary search tree 
    //ordered
    //each parent can have only 2 children

class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    //add function
    add(data) {
        const node = this.root;
        //if the bst is empty, create a new node and make it the root
        if(node === null) {
            this.root = new Node(data);
            return
        }else {
            const searchTree = function(node){
                if(data < node.data){
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.right === null) {
                        node.right = new Node(data);
                        return
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
}