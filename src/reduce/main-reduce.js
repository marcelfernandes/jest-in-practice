'use strict'

const mainReduce = (arr, func, initialValue) =>  {
    let acumulado = initialValue
    let arrCopy = arr

    if(initialValue === undefined) {
        acumulado = arr[0]
        arrCopy = arr.slice(1)
    }

    for(let i = 0; i < arrCopy.length; i++) {
        acumulado = func(acumulado, arrCopy[i], i, arrCopy)
    }

    return acumulado
}

export default mainReduce