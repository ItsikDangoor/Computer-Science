const log = console.log;

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
class Node {
    //using default parameters
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor()  {
        this.root = null;
    }
    //tree data visualization helper
    toObject() {
        return this.root;
    }
    add(value) {
        let assignLeft = false, assignRight = false;
        //if this.root === null, then add to the root
        if(!this.root) {
            this.root = new Node(value);
            return;
        }
        let node = this.root;
        while(node) {
            //allowing duplicate values, assign them to left, always.
            if(value <= node.value) {//go left
                assignLeft = true;
                assignRight = false;
                if(node.left) {
                    node = node.left;
                } else {
                    break;
                }
            } else { //value > node.value, go right
                assignLeft = false;
                assignRight = true;
                if(node.right) {
                    node = node.right;
                } else {
                    break;
                }
            }
        }
        let newNode = new Node(value);
        if(assignLeft) {
            node.left = newNode;
        } else {
            node.right = newNode;
        }
    }
}

//the tree in the image file
const nums1 = [8, 10, 3, 6, 7, 14, 1, 13, 4];
let bst1 = new Tree();
/*bst1.add(8);
bst1.add(3);
bst1.add(10);*/
for(let i = 0; i < nums1.length; i += 1) {
    bst1.add(nums1[i]);
}
//adding duplicated value
bst1.add(8);
log(bst1);

log('----------------------');
const nums2 = [3,7,4,6,5,1,10,2,9,8];
let bst2 = new Tree();
for(let i = 0; i < nums2.length; i += 1) {
    bst2.add(nums2[i]);
}
log(bst2);





// unit tests
// do not modify the below code
/*
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
});*/
