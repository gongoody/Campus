class User{
    constructor(name) {
        this.name = name
    }
        sayHi(){
            console.log(`Hola soy ${this.name}`)
    }

    static staticMethod(){
        console.log('Metodo estatico')
    }

    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
            
}

class Button {
    constructor(value){
        this.value = value
    }

    click = () => {
        console.log(this.value)
    }
}

//Usamos _ para hacer metodos protegidos
//Usamos # para hacer metodos privados

class Animal {

    static planet = 'Earth'

    constructor(name){
        this.name = name
        this.speed = 0;
    }
    run(speed){
        this.speed = speed
        console.log(`${this.name} corre con una velocidad de ${this.speed}`)
    }
    stop(){
        this.speed = 0
        console.log(`${this.name} se quedo quieto`)
        this.#privateMethod()
    }
    #privateMethod(){
        console.log('Solo la clase animal')
    }
}

class Rabbit extends Animal{
    constructor(name, earLength){
        super(name)
        this.earLength = earLength
    }

    hide(){
        console.log(`${this.name} se escondió`)
    }
    stop(){
        super.stop()
        this.hide()
    }
    static compare(rabbit1, rabbit2){
        if(rabbit1 instanceof Rabbit && rabbit2 instanceof Rabbit){
        return rabbit1.earLength - rabbit2.earLength
        }
        return 'Deben ser conejos'
    }
}

const rabbits = [
    new Rabbit('Conejo negro', 15),
    new Rabbit('Conejo blanco', 10)
]

rabbits.sort(Rabbit.compare)
console.log(rabbits)
console.log(Rabbit.planet)

class Dog extends Animal{
    constructor(name,race){
        super(name)
        this.race = race
    }
    play(){
        console.log(`${this.name} mueve la cola`)
    }
}

class Article{

    static publisher = 'Mi editorial'

    constructor(title, date){
        this.title = title
        this.date = date
    }

    static compare(article1, article2){
        return article1.date - article2.date
    }
}

const article = [
    new Article('COVID', new Date(2020, 4, 10)),
    new Article('Teletrabajo', new Date(2019, 10, 15)),
    new Article('Zoom', new Date(2018, 11, 1)),
]
