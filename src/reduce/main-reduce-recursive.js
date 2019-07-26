'use strict'

const isInitialValueUndefined = (initialValue) => initialValue === undefined

const mainReduce = (arr, func, initialValue) =>  {
    const acumulado = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
    const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr

    return (function mainReduceInternal(accInternal, arrInternal, counter) {
        const [head, ...tail] = arrInternal
        const acumuladoNext = () => func(accInternal, head, counter, arrCopy)

        return arrInternal.length === 0
            ? accInternal
            : mainReduceInternal(acumuladoNext(), tail, counter + 1)
    })(acumulado, arrCopy, 0)
}

export default mainReduce