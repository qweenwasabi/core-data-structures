'use strict'

  export default class PriorityQueue {
  constructor() {
    this.pQueue = [];
  }

  enqueue(value) {
    this.pQueue.push(value);
  }

  front() {
    return this.pQueue[0];
  }

  back() {
  return this.pQueue[this.pQueue.length-1];
  }

  dequeue() {
  return this.pQueue.shift();
  }
  isEmpty(){
   if (this.pQueue.length == 0) {
    return true;}
  }
  length() {
    return this.pQueue.length;
  }
  print() {
    console.log(this.pQueue.join(' '));
  }
}
