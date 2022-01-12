//las funciones deberian ser nombradas con verbos

function add(a,b){
    let sum  = a + b
    console.log(`${a} + ${b} = ${sum}`)
}

let sum = add

function multiply(a,b){
    let product = a*b
    console.log(`${a} * ${b} = ${product}`)
}

//es una buena practica definir arrays, MAPS y objetos como "const"

const arr = [add, multiply]

arr[0](2,5)

console.log(arr)

//Funciones incorporadas de JS(se ejecutan solo en navegador)

alert('Esto es una alerta!')

prompt('Seleccione un numero del  al 9', 0)

let number1 = Number('8')
let number2 = Number.parseInt('8')

confirm('Esta seguro?')

Callbacks

function showAccept(){
    console.log('Accepted')
}

function showCancel(){
    console.log('Canceled')
}

function process(question, yes, no){
    confirm(question) 
        ? yes() 
        : no()
}

process('Are you sure?', showAccept, showCancel)

//Clousure

function firstLevel(){
    console.log('Primer nivel...')
    const arr = []
    function secondLevel(){
        const otherArr = []
        console.log('Segundo nivel...')
        arr.push('dos')
        thirdLevel()
        console.log('En el segundo nivel (antes de eliminar) ->' + arr)
        arr.pop()
        console.log('En el segundo nivel (despues de eliminar) ->' + arr)
        function thirdLevel(){
            console.log('Tercer nivel...')
            arr.push('tres')
            console.log('En el tercer nivel ->' + arr)
        }
    }
    secondLevel()
    console.log('En el primer nivel ->' + arr)
}

firstLevel()

//ARGUMENTS

function selectFirst() {
    console.log('El primer elemento es' + arguments[0])
}

selectFirst('A','B','C')

function getTypeOfArgument(element){
    return typeof(element)
}

function showType(fun){
    let type = fun(19)
    console.log(type)
}

showType(getTypeOfArgument)

//Objetos

let car = 'Fiat'

const car = {
    type: 'Fiat', 
    model: '600', 
    color: 'blanco'
}