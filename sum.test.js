'use strict'

import { expect } from 'chai'
import sum from './sum'

describe('M2#A01-05 Scope', () => {

    it('Testing jest 01', () => {
        console.assert(1 === 1, '1 not equal 2')
    })
    it('Testing jest 02', () => {
        expect(1).to.be.equal(1)
    })
})

describe('M2#A06 Scope', () => {
    it('sum should be a function', () => {
        expect(sum).to.be.a('function')
    })
})

describe('M2#A08 Scope', () => {
    it('sum should be a function', () => {
        expect(sum).to.be.a('function')
    })

    it('sum(1, 2) should return 3', () => {
        expect(sum(1, 2)).to.be.equal(3)
    })
})