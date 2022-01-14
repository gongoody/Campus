//Repaso OBJ

const person = {
    firstName : 'Homero',
    lastName : 'Simpson',
    age : '55',
    pets : [
        {
            name : 'Ayudante de Santa',
            toys : ['pelota' , 'hueso']
        },
        {
            name : 'Bola de Nieve',
            toys : ['pelota' , 'ratoncito']
        }
    ],
    fullName : function(){
        return this.firstName + ' ' + this.lastName
    },

    get getFirstName(){
        return this.firstName.toLocaleUpperCase()
    },

    set setAge(age){
        this.age = age
    }
}

//Itereacion dentro de un objeto
for (let i in person.pets) {
    let n = person.pets[i].name + ' juega con '
    for (let j in person.pets){
        let m = person.pets[j].toys
        console.log(n + m)
    }
}

//Diferencia entre una funcion y declarar con GET/SET
console.log(person.fullName())
console.log(person.getFirstName)

person.setAge = 50

console.log(person.age)

//Agregar propiedades a un objeto
const o = {
    counter: 0
}
Object.defineProperty(o, 'reset',{
    get: function(){
        this.counter = 0
    }
})
Object.defineProperty(o, 'increment',{
    get: function(){
        this.counter++
    }
})

console.log(o)
o.increment
console.log(o)
o.increment
console.log(o)
o.increment
console.log(o)
o.reset
console.log(o)


//Uso del JSON.stringify

console.log(JSON.stringify(person))

//Aca no se puede usar
const arr = ['Libro', 'Lapiz', 'Goma']
console.log(JSON.stringify(arr))