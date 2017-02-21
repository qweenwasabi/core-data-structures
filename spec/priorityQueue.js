import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import pQueue from '../src/PriorityQueue'

chai.use(chaiChange)

describe('pQueue', () => {
  'use strict'

  it('exists', () => {
    expect(pQueue).to.be.a('function')
  })
 context('enqueue', () => {
   it(' adds an element with priority (number) to the back of the queue.',() => {
      const myPqueue = new  Pqueue

    expect(() => myPqueue.push('foo')
    .to.alter(() => myPqueue.length(), { from:0 , to:1})
  })
 })
 context('front', () => {
   it(' returns the front element (highest priority) in the queue or null if the queue is empty.', () => {
     .to.alter(() => myPqueue.length()
   })
 })
})
