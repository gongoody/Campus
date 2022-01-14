//Clases

function Person(firstName, lastName, age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.city = 'Sprinfield'
}

const homero = new Person('Homero', 'Simpson', 55)
const bart = new Person('Bart', 'Simpson', 12)

//definicion de objetos especiales

//SET
let set = new Set(['a','b','c'])

//Invocar un callback sobre cada elemento
set.forEach(function(value){
    console.log(`el valor del elemento es ${value}`)
})
//Proceso detras del forEach
//Opcion con values()
const itValues = set.values()
for(const val of itValues){
    console.log(`El valor del elemento es ${val}`)
}
//Opcion con keys()
const itKeys = set.keys()
for(const val of itKeys){
    console.log(`El valor del elemento es ${val}`)
}
//Opcion con entries()
const itEntries = set.entries()
for(const val of itEntries){
    console.log(`El valor del elemento es ${val}`)
}

//Agregar un elemento
set.add('d')
console.log(set)

//Borra un elemento
set.delete('a')
console.log(set)

//Pregunta si posee determinado elemento
set.has('c')
console.log(set)

//Borra todas las entradas del set
set.clear()
console.log(set)


//MAP
let map = new Map([
    ['Homero', 55],
    ['Bart', 12],
    ['Lisa', 13]
])

//Agregar un elemento
map.set('Maggie', 3)
console.log(map)

//Eliminar un elemento
map.delete('Homero')
console.log(map)

//Pregunta si posee determinado elemento
map.has('Bart')
console.log(map)

//Metodo forEach
map.forEach(function(value, key){
    console.log(`La claves es ${key} y el valor es ${value}`)
})

//Opcion con entries()
const itMapEntries = map.entries()
for (const val of itMapEntries){
    console.log(`La clave es ${val[0]} y el valor es ${val[1]}`)
}
//Opcion con values()
const itMapValues = map.values()
for (const val of itMapValues){
    console.log(val)
}
//Opcion con keys()
const itMapKeys = map.values()
for (const val of itMapKeys){
    console.log(val)
}


//Eliminar todos los elementos
map.clear()
console.log(map)
