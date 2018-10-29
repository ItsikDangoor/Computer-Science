/*

Binary Search Tree!

Name your class Tree.

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

As always, you can change describe to xdescribe to prevent the unit tests from running

*/

class Tree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }
        else {
            let current = this.root;
            /*"while(true)" loop, which basically means that I want
            this to keep running until I explicitly break out of you.
            And the reason why we can do this is that if you're adding
            a new value to a binary search tree there's always a place
            to add it, it should never actually not find a place to add it,
            so that's why it's okay for us to do a "while(true)" loop.*/
            while(true) {
                if (current.value > value) {
                    // go left

                    if (current.left) {
                        current = current.left;
                    }
                    else {
                        current.left = new Node(value);
                        break;//return works as well
                    }
                }
                else {
                    // go right
                    if (current.right) {
                        current = current.right;
                    }
                    else {
                        current.right = new Node(value);
                        break;//return works as well
                    }
                }
            }
        }
        return this;
    }
    toJSON() {
        return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() {
        return this.root.serialize();
    }
}

class Node {
    constructor(value=null, left=null, right=null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
    serialize() {
        const ans = { value: this.value };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        return ans;
    }
}

// unit tests
// do not modify the below code
describe('Binary Search Tree', function() {
    it('creates a correct tree', () => {
        const nums = [3,7,4,6,5,1,10,2,9,8];
        const tree = new Tree();
        nums.map( num => tree.add(num));
        const objs = tree.toObject();
        render(objs, nums);

        expect(objs.value).toEqual(3);

        expect(objs.left.value).toEqual(1);
        expect(objs.left.left).toBeNull();

        expect(objs.left.right.value).toEqual(2);
        expect(objs.left.right.left).toBeNull();
        expect(objs.left.right.right).toBeNull();

        expect(objs.right.value).toEqual(7);

        expect(objs.right.left.value).toEqual(4);
        expect(objs.right.left.left).toBeNull();

        expect(objs.right.left.right.value).toEqual(6);
        expect(objs.right.left.right.left.value).toEqual(5);
        expect(objs.right.left.right.left.right).toBeNull();
        expect(objs.right.left.right.left.left).toBeNull();

        expect(objs.right.right.value).toEqual(10);
        expect(objs.right.right.right).toBeNull();

        expect(objs.right.right.left.value).toEqual(9);
        expect(objs.right.right.left.right).toBeNull();

        expect(objs.right.right.left.left.value).toEqual(8);
        expect(objs.right.right.left.left.right).toBeNull();
        expect(objs.right.right.left.left.left).toBeNull();
    });
});