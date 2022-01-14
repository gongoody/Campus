let myArray = {
    modelo: 'Onix',
    marca: 'Chevrolet',
    push: function(obj, key ,value){
        obj[key] = value
    },
    pop: function popObj(obj){
        let objProperties = Object.keys(obj)
        let propToDelete = objProperties[objProperties.length-1]
        if(propToDelete !== 'pop' && propToDelete !== 'push'){
            delete obj[propToDelete]
        }
    },
}
myArray.push(myArray,'color', 'rojo')
console.log(myArray)
myArray.pop(myArray)
console.log(myArray)