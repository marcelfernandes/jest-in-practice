'use strict'

import { expect } from 'chai'
import reduce from './reduce-recursive'

it('reduce should be a function', () => {
    expect(reduce).to.be.a('function')
})

it('reduce([], (item) => item) should return []]', () => {
    expect(reduce([], (item) => item)).to.be.deep.equal([])
})

it('reduce([1]) should return [1]', () => {
    expect(reduce([1])).to.be.deep.equal([1])
})

it('reduce([1, 2]) should return [2, 1]', () => {
    expect(reduce([1, 2])).to.be.deep.equal([2, 1])
})
