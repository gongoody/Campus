const rndData = require('generate-random-data')

const database = { products : [] }

for(let i = 1; i <= 300; i++){
    database.products.push({
        id: i,
        name: rndData.lorem() + '' + rndData.lorem(),
        description: rndData.lorems(),
        price: rndData.float(100, 10000, 10, 99, 2),
        quantity: rndData.natural(1, 20),
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
    })
}

console.log(JSON.stringify(database))