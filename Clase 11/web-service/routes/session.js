const router = require('express').Router()

router.get('/', async(req, res)=> {
    console.log(req.context.me.id)
    try{
        const user = await req.context.models.users.findById(req.context.me.id)
        return res.send(user)
    }catch(error){
        res.send(error)
        res.status(500)
    }
})

module.exports = router