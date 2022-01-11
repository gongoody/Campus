//Tipos de variables y sus usos

var a = 1;
//let b = 3;
const c = 5;

const b = 5
const h = 10
let s = b * h

let datos = 1 + 2 + '5';
console.log(datos)

const animals = ['Perro', 'Gato', 'Canario']
console.log(animals)
animals[0] = 'Raton'
animals.push('Leon')
console.log(animals)

let fecha = new Date()
let mapa = new Map()

//opcion ejecutando funcion
 function ages1(age1,age2,age3){
   function average(defaultAge = 7){
        return (age1 + age2 + age3 + defaultAge)/4
    }
    console.log(average() , "Hola")
}

//opcion clousure
function ages2(age1,age2,age3){
   return function(defaultAge = 7){
    console.log((age1 + age2 + age3 + defaultAge)/4)
    }
}

ages1(1,2,3)
ages2(3,2,9)(10)


