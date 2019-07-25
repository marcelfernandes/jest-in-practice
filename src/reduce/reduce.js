'use strict'

const reduce = (arr, func, initialValue) =>  {
    let acumulado = initialValue

    for(let i = 0; i < arr.length; i++) {
        acumulado = func(acumulado, arr[i])
    }

    return acumulado
}

export default reduce