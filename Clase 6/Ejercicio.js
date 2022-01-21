class FormatError extends SyntaxError{
    constructor(message){
        super(message)
        this.name = 'Format Error'
    }
}

let err = new FormatError('Error de formato')

console.log(err.name)
console.log(err.message)
console.log(err.stack)

console.log(err instanceof SyntaxError)