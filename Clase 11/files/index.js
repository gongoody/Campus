const fs = require('fs').promises

async function readFile(filePath) {
    try{    
        const data = await fs.readFile(filePath)
        console.log(data.toString())
    }catch(err){
        console.error(`Error al tratar de leer el archivo ${err.message}`)
    }
}

//readFile('test.txt')

async function openFile() {
    try{
        const csvHeaders = 'nombre, cantidad, precio'
        await fs.writeFile('test.csv', csvHeaders)
    }
    catch(err){
        console.error(`Error al tratar de escribir el archivo ${err.message}`)
    }
}

//openFile()

async function addTestItems(name,quantity, price) {
    try{
        const csvLine = `\n${name}, ${quantity}, ${price}`
        await fs.writeFile('test.csv', csvLine, {flag: 'a'})
    }catch(err){
        console.error(`Error al tratar de escribir el archivo ${err.message}`)
    }
}

/*
(async function() {
    await openFile()
    await addTestItems('papas', 10, 200) 
    await addTestItems('huevos', 12, 180) 
})()
*/

async function deleteFile(filePath) {
    try{
        await fs.unlink(filePath)
        console.log(`${filePath} borrado`)
    }catch(err){
        console.error(`Error al tratar de eliminar el archivo ${err.message}`)
    }
}

//deleteFile('test.csv')

async function moveFile(oldPath, newPath) {
    try{
        await fs.rename(oldPath, newPath)
        console.log(`Archivo movido exitosamente de ${oldPath} al nuevo destino ${newPath}`)
    }catch(err){
        console.error(`Error al tratar de mover el archivo ${err.message}`)
    }
}

moveFile('test.txt', 'file-store/text-1.txt')