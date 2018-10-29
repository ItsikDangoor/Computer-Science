/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/


class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  //the push method in non garbage collected language
  // is actually allocating memory
  //in ArrayList the method is doubling the capacity:
  // n/2 + n/4 + n/8 + n/16 + ... + 2 + 1
  push(value) {
    this.data[this.length] = value;
    this.length += 1;
  }
  
  pop() {
    //return this.delete(this.length - 1);
    //OR
    const ans = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return ans;
  }
  
  get(index) {
    return this.data[index];
  }
  
  delete(index) {
    const value = this.data[index];
    this._collapseTo(index);
    return value;
  }
  
  _collapseTo(index) {
    for(let i = index; i < this.length - 1; i += 1) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }
  
  //lecturer said no need for serialize
  /*serialize() {
        return this.data;
  }*/
}


/*there is something with happenning with threads when running the code from the file.
  can see it when pushing 5 elements in a sequence, but when doing those on the console
  statement by statemnet all is good.
  Another BUT not good:
  when copying and pasting all the below code in one line, and executing once(one hit on Enter) */

const arrlist = new ArrayList();
console.log(arrlist);

arrlist.push(10);
arrlist.push(70);
arrlist.push(99);
arrlist.push(234);
arrlist.push(1000);

console.log(arrlist);

console.log("get(3): " + arrlist.get(3));
console.log("get(4): " + arrlist.get(4));
console.log("get(5): " + arrlist.get(5));

console.log("pop()");
console.log(arrlist.pop());
console.log(arrlist);

//console.log("delete(4)\n")
//arrlist.delete(4);

console.log("delete(1)\n")
arrlist.delete(1);

//console.log("arrlist");
console.log(arrlist);








// unit tests
// do not modify the below code
describe('ArrayList', function() {
  const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
  const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
  let list;
  
  beforeEach( () => {
    list = new ArrayList();
  })
  
  it('constructor', () => {
    expect(list).toEqual(jasmine.any(ArrayList));
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
  
});
