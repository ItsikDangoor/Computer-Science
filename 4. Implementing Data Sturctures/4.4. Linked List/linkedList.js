/*
  LinkedList

  Name your class / constructor (something you can call new on) LinkedList

  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.

  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class Node {
    constructor() {
        this.value = 0;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node();
        newNode.value = value;
        newNode.next = null;
        if(this.length === 0) {//Or if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length += 1;
    }
    pop() {
        if (this.length === 0) {
            return false;
        }
        const popNodeValue = this.tail.value;
        let node = this.head;
        let prevNode = null;

        //while(node.next !== null && this.length !== 1) {
        while(node.next !== null && this.head !== this.tail) {
            prevNode = node;
            node = node.next;
        }

        if(this.length === 1) {
            delete this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
        } else {
            delete this.tail;
            prevNode.next = null;
            this.tail = prevNode;
            this.length -= 1;
        }
        return popNodeValue;
    }
    search(value) {
        let node = this.head;

        do {
            if(node.value === value) {
                return node;
            }
            node = node.next;

        } while(node.next !== null);

        return {};
    }
    search2(value) {//returns the last node if not found value!
        let node = this.head;
        while(node.value !== value && node.next !== null ) {
            node = node.next;
        }

        return node;
    }

    //when we count first node from index value 1
    /*get(index) {
        if(index > this.length || index === 0) {
            return false;
        }

        let node = this.head;
        for(let i = 0; i < index - 1; i += 1) {
            node = node.next;
        }

        return node.value;
    }*/
    //when we count zero index value
    get(index) {
        if(index >= this.length || index < 0) {
            return false;
        }

        let node = this.head;
        for(let i = 0; i < index; i += 1) {
            node = node.next;
        }

        return node.value;
    }
    delete(index) {
        const value = this.get(index);
        //this._collapse(index);
        return (value && this._collapse(index)? value: false);
    }
    _collapse(index) {
        if(this.length === 0) {
            return false;
        }
        let prevNode, followingNode;
        let node = this.head;
        for(let i = 0; i < index; i += 1) {
            prevNode = node;
            node = node.next;
        }

        if(this.length === 1 && index === 0) {
            delete this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return true;
        } else if(index === 0) {
            this.head = this.head.next;
            this.length -= 1;
            return true;
        }
        followingNode = node.next;
        prevNode.next = followingNode;
        // delete node; can node directly delete node! strict mode.
        //GB will be responsible for freeing the requested node
        this.length -= 1;
        return true;
    }
    insert(index, value) {
        this._expand(index, value);
    }
    _expand(index, value) {
        let newNode = new Node();
        newNode.value = value;
        newNode.next = null;
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return;
        } else if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length += 1;
            return;
        }

        let prevNode;
        let node = this.head;
        for(let i = 0; i < index; i += 1) {
            prevNode = node;
            node = node.next;
        }
        prevNode.next = newNode;
        newNode.next = node;


        /*let nodeNext = node.next;
        node.next = newNode;
        newNode.next = nodeNext;
        if(index === this.length - 1) {
            this.tail = newNode;
        }*/

        this.length += 1;
    }
    _expand2(index, value) {
        let newNode = new Node();
        newNode.value = value;
        newNode.next = this.head;
        /*if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return;
        } else if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length += 1;
            return;
        }
*/
        this.head = newNode;
        let prevNode;
        let node = this.head;
        for(let i = 0; i < index; i += 1) {
            prevNode = node;
            node = node.next;
        }
        prevNode.next = newNode;
        newNode.next = node;

        this.length += 1;
    }

}

log = console.log;
log('###########');
let linkedList1 = new LinkedList();
//log(linkedList1);
linkedList1.push(10);
linkedList1.push(20);
linkedList1.push(30);
linkedList1.push(40);
linkedList1.push(50);
linkedList1.push(60);
linkedList1.push(70);
/*
log('new Linked List --- after push');
log(linkedList1);
*/

let popValue = 0;
popValue = linkedList1.pop();
//log(linkedList1);
log(popValue);

popValue = linkedList1.pop();
log(popValue);
log(linkedList1);


/*popValue = linkedList1.pop();
log(popValue);
log(linkedList1);*/

log('---- Get ----');
let getValue = 0;
getValue= linkedList1.get(2);
log(getValue);
getValue= linkedList1.get(0);
log(getValue);
getValue= linkedList1.get(linkedList1.length - 1);
log(getValue);
getValue= linkedList1.get(33);
log(getValue);

log('-----search 1 ------');
let node = {};
node = linkedList1.search(30);
log(node);

node = {};
//log(node);

node = linkedList1.search(40);
log(node);

node = {};
//log(node);

node = linkedList1.search(10);
log(node);

node = {};
//log(node);

node = linkedList1.search(70);
log(node);


log('-----search 2 ------');
node = {};
node = linkedList1.search2(30);
log(node);

node = {};
//log(node);

node = linkedList1.search2(40);
log(node);

node = {};
//log(node);

node = linkedList1.search2(10);
log(node);

node = {};
//log(node);

node = linkedList1.search2(70);
log(node);

/*
log('------------');
let linkedList2 = new LinkedList();
linkedList2.push('a');
log(linkedList2);

node = {};
//log(node);

node = linkedList2.search('f');
log(node);


log('------------');
node = {};
let linkedList3 = new LinkedList();
linkedList3.push('a');
linkedList3.push('b');
linkedList3.push('c');
linkedList3.push('d');
log(linkedList3);
node = linkedList3.search('d');
log(node);

node = {};
node = linkedList3.search('a');
log(node);


log('*************');
node = {};
node = linkedList3.get(0);
log(node);

node = {};
node = linkedList3.get(3);
log(node);

node = {};
node = linkedList3.get(1);
log(node);

node = {};
node = linkedList3.get(4);
log(node);

node = {};
node = linkedList3.get(33);
log(node);

*/

log('***** delete ****');
//log(linkedList3);
let valueDeleted = 0;
valueDeleted = linkedList1.delete(1);
log(valueDeleted);

valueDeleted = linkedList1.delete(0);
log(valueDeleted);

valueDeleted = linkedList1.delete(99);
log(valueDeleted);

valueDeleted = linkedList1.delete(-99);
log(valueDeleted);
//log(linkedList1);

log('*************');
linkedList1.insert(0, 90);
linkedList1.insert(2, 10);
linkedList1.insert(linkedList1.length - 1, 111);
log(linkedList1);



//log(linkedList1);
//log('----');
//log(linkedList3.length);
//valueDeleted = linkedList3.delete(linkedList3.length - 1);
/*log(valueDeleted);
log(linkedList3);*/




// unit tests
// do not modify the below code
/*
describe('LinkedList', function() {
    const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
    const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
    let list;

    beforeEach( () => {
        list = new LinkedList();
    })

    it('constructor', () => {
        expect(list).toEqual(jasmine.any(LinkedList));
    });

    it('push', () => {
        abcRange(26).map( character => list.push(character) );
        expect(list.length).toEqual(26);
    });

    it('pop', () => {
        abcRange(13).map( character => list.push(character) );
        expect(list.length).toEqual(13);
        range(10).map( () => list.pop() );
        expect(list.length).toEqual(3);
        expect(list.pop()).toEqual('c');
    });

    it('get', () => {
        list.push('first');
        expect(list.get(0)).toEqual('first');
        list.push('second');
        expect(list.get(1)).toEqual('second');
        expect(list.get(0)).toEqual('first');
        abcRange(26).map( character => list.push(character));
        expect(list.get(27)).toEqual('z');
        expect(list.get(0)).toEqual('first');
        expect(list.get(9)).toEqual('h');
        list.pop();
        expect(list.get(list.length-1)).toEqual('y');
    });

    it('delete', () => {
        abcRange(26).map( character => list.push(character) );
        list.delete(13);
        expect(list.length).toEqual(25);
        expect(list.get(12)).toEqual('m');
        expect(list.get(13)).toEqual('o');
        list.delete(0);
        expect(list.length).toEqual(24);
        expect(list.get(0)).toEqual('b');
    });

});*/
