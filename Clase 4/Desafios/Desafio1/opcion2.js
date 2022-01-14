let myArray = {
    modelo: 'Onix',
    marca: 'Chevrolet'
}

function pushObj(obj, key ,value){
    obj[key] = value
}

function popObj(obj){
    let objProperties = Object.keys(obj)
    let propToDelete = objProperties[objProperties.length-1]
    delete obj[propToDelete]
}

pushObj(myArray, 'color', 'rojo')
pushObj(myArray, 'CV', '1.8')
console.log(myArray)
popObj(myArray)
console.log(myArray)
