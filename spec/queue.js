import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const myQueue = new Queue()

      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })

    })
  })
  // context('dequeue()', () => {
  //   it('returns and removes the front element in the queue or null if the queue is empty.', () => {
  //     const myQueue = new Queue()
  //
  //     expect(() => myQueue.dequeue('foo'))
  //       .to.satisfy(()=> myQueue.dequeue, { return myQueue(0) })
  //       .to.alter(() => myQueue.length(), { from: 1, to: 0 })
  //   })
  // })
})
