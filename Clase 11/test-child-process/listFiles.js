const {exec} = require('child_process')

exec('dir /a', (error, stdout, stderr) =>{
    if(error){
        console.error(`error: \n${error.message}`)
        return
    }

    if(stderr){
        console.error(`error: \n${stderr}`)
        return
    }
    console.log(`stdout: \n${stdout}`)
})