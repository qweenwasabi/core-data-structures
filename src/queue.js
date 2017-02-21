'use strict'


  export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
  return this.queue[0];
  }

  back() {
  return this.queue[this.queue.length-1];
  }
  isEmpty(){
   if (this.dataStore.length == 0) {
    return true;}
  }
  length() {
    return return this.stack.length;
  }
  print() {
    console.log(this.queue.join(' '));
  }
}
