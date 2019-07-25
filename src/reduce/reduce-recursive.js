'use strict'

const reduce = (arr) => {
    return arr.length === 0 ? [] : [
        arr.slice(-1)[0],
        ...reduce(arr.slice(0, -1))
    ]
}

export default reduce