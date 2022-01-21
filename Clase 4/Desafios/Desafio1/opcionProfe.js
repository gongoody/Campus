const myArray = {
    size: 0,
    values: [],

    push: function(element){
        this.values[this.size] = element
        this.size++
    },
    pop: function(){
        if(this.size > 0){
            const aux = []
            for(let i = 0; i < this.size - 1; i++){
                aux[i] = this.values[i]
            }
            this.values = aux
            this.size--
        }
    }
}

myArray.push('first')
console.log(myArray)
myArray.push('second')
console.log(myArray)
myArray.pop()
console.log(myArray)