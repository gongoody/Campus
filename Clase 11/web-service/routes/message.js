const uuid = require('uuid')
const router = require('express').Router()

router.get('/', async (req, res) =>{
    try{
        const messages =  await req.context.models.messages.find()
        return res.send(messages)
    }catch(error){
        res.send('Mensajes no encontrados')
        res.status(404)
    }
})

router.get('/:messageId', async(req, res) =>{
    try {
        const messageById = await req.context.models.messages.findOne({id:req.params.messageId})
        return res.send(messageById)
    } catch (error) {
        res.send('Mensaje no encontrado')
        res.status(404)
    } 
})

router.post('/', async(req, res) =>{
    try {
        if(req.context.me.id){
        const newMessage = await req.context.models.messages.create({
            text: req.body.text,
            user: req.context.me.id
        })
        return res.send(newMessage)
    }else{
        return res.status(500).send('No ha iniciado sesion')
    }
    } catch (error) {
        res.send('Error en la creacion de mensaje')
        res.status(400)
    }
})

router.delete('/:messageId', async (req, res) =>{
    try {
        const messageDeleted = await req.context.models.messages.deleteOne({id:req.params.messageId})
        res.send(`Mensaje eliminado`)
    } catch (error) {
        res.send('Mensaje no encontrado')
        res.status(404)
    }
})

module.exports = router