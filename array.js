'use strict';
const Memory = require('./memory.js');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  //repositions the array in memory when there is no room to grow
  _resize(size) {
    // stores head
    const oldPtr = this.ptr;
    // sets the head in memory to the new location and assigns the pointer to the new location
    this.ptr = memory.allocate(size);
    // if we run out of memory
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    // copies the old data to our new location
    memory.copy(this.ptr, oldPtr, this.length);
    // not exactly sure how free is working, I think it is clearing the old pointer address?
    memory.free(oldPtr);
    // changes the storage capacity to the size given
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= (this.length)) {
      throw new Error('Index not in range');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length-1);
    this.length--;
    return value;
  }

  insert(index, value) {

  }

}

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
	
  arr.push('hellos'); // returns NaN, which I think is because the memory is initialized as a float array
  console.log(arr);
  console.log(arr.get(0));
}

main();