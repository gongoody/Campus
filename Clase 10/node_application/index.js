const colors = require('colors')

const choseColor = colors.getRandomColor()

console.log(`Si usa el color ${choseColor.name} debera utilizar el codigo ${choseColor.code}`)

const favoriteColor = colors.getRed()

console.log(`Mi color favorito es el ${favoriteColor.name} porque su codigo de color es ${favoriteColor.code}`)