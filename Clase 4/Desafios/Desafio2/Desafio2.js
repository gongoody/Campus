obj1 = {
    atributo1: 'valor1',
    atributo2: 'valor2',
    atributo3: 'valor3',
    atributo4: {
        atributo1b: 'valor1b',
        atributo2b: 'valor2b',
        atributo3b: 'valor3b',
    },
}

obj2 = {
    atributo1: 'valor1',
    atributo2: 'valor2',
    atributo3: 'valor3',
    atributo4: {
        atributo1b: 'valor1b',
        atributo2b: 'valor2b',
        atributo3b: 'valor3b',
    },
}

obj3 = {
    atributo1: 'valor1',
    atributo2: 'valor2',
    atributo4: {
        atributo1b: 'valor1b',
        atributo3b: 'valor3b',
    },
}


function isObject(object){
    return object != null && typeof object === 'object'
}

function deepEqual(object1, object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if(keys1.length !== keys2.length){
        return false
    }

    for(const key of keys1){
        const val1 = object1[key]
        const val2 = object2[key]
        const areObjects = isObject(val1) && isObject(val2)
        if(areObjects && !deepEqual(val1, val2) || !areObjects && val1 !==val2){
            return false
        }
    }
    return true
}


console.log(deepEqual(obj1 , obj2))