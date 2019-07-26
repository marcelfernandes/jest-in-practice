'use strict'

import { expect } from 'chai'
import find from './find-recursive'

it('find must be a function', () => {
    expect(find).to.be.a('function')
})

it('find([1, 2, 3], (item) => item === 1) should return 1', () => {
    const before = find([1, 2, 3], (item) => item === 1)
    expect(before).to.be.equal(1)
})

it('find([1, 2, 3], (item) => item === 3) should return 3', () => {
    const before = find([1, 2, 3], (item) => item === 3)
    expect(before).to.be.equal(3)
})

it('find([1, 2, 3], (item) => item === 4) should return undefined', () => {
    const before = find([1, 2, 3], (item) => item === 4)
    expect(before).to.be.undefined
})

it('find([1, 2, 3], (item, index) => index === 1) should return 2', () => {
    const before = find([1, 2, 3], (item, index) => index === 1)
    expect(before).to.be.equal(2)
})

it('find([1, 2, 3], (item, index, array) => array[1]) should return 2', () => {
    const before = find([1, 2, 3], (item, index, array) => array[index] === 2)
    expect(before).to.be.equal(2)
})