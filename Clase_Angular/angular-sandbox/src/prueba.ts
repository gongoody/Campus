class MyClass{
    myArray : Array<number>

    constructor (someArg: Array<number>){
        this.myArray = someArg
    }

    someMethod(){
        for (let item of this.myArray) {
            console.log(item)
        }
    }
}

let someVar: number = 123456
let myClassInstance: MyClass = new MyClass(someVar)
myClassInstance.someMethod()