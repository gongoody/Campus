const person1 = {
    nombre: 'Homero',
    data: {
        age: 55,
        address: 'Avenida Siempreviva'
    }
}

const person2 = {
    nombre: 'Homero',
    data: {
        age: 55,
        address: 'Avenida Siempreviva'
    }
}

function compareObjects(object1, object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if(keys1.length !== keys2.length){
        return false
    }
}

console.log(compareObjects(person1, person2))