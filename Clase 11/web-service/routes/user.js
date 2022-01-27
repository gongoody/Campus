const router = require('express').Router()

router.get('/', async(req, res) =>{
    try{
        const users =  await req.context.models.users.find()
        return res.send(users)
    }catch(error){
        res.send('Usuarios no encontrados')
        res.status(404)
    }
})

router.get('/:userId', async(req, res) =>{
    try {
        const userById = await req.context.models.users.findOne({_id:req.params.userId})
        return res.send(userById)
    } catch (error) {
        res.send('Usuario no encontrado')
        res.status(404)
    } 
})

router.post('/', async (req, res) =>{
    try {
        const newUser = await req.context.models.users.create({
            username: req.body.username
        })
        return res.send(newUser)
    } catch (error) {
        res.send('Error en la creacion de usuario')
        res.status(400)
    }
})

router.put('/:userId', async (req, res) =>{
    try {
        const modifiedUser = await req.context.models.users.updateOne({_id:req.params.userId},{username: req.body.username})
        return res.send(modifiedUser)
    } catch (error) {
        res.send('Usuario no encontrado')
        res.status(404)
    }
})

router.delete('/:userId', async(req, res) =>{
    try {
        const userDeleted = await req.context.models.users.deleteOne({_id:req.params.userId})
        res.send(`Usuario eliminado`)
    } catch (error) {
        res.send('Usuario no encontrado')
        res.status(404)
    }
})

module.exports = router