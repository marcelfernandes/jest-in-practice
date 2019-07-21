'use strict'

import { expect } from 'chai'
import div from './div'

describe('M2#A08 Scope', () => {

    it('div should be a function', () => {
        expect(div).to.be.a('function')
    })
    it('div(10, 2) should return 5', () => {
        expect(div(10,2)).to.be.equal(5)
    })

})