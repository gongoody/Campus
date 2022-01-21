const TicketManager = require('./ticketManager')
const EmailService = require('./emailService')
const DatabaseService = require('./databaseService')

const ticketManager = new TicketManager(3)
const emailService = new EmailService()
const databaseService = new DatabaseService()

ticketManager.on('buy', (email, price, date) => {
    emailService.send(email)
    databaseService.save(email, price , date)
})

ticketManager.on('error', (error) => {
    ticketManager.removeAllListeners('buy')
    console.log(`${error}`)
})

const onBuy = () =>{
    console.log('Me voy a ir pronto...')
}

ticketManager.on('buy', onBuy)

ticketManager.buy('mail@mail.com', 20)
ticketManager.buy('mail@mail.com', 20)
ticketManager.buy('mail@mail.com', 15)
ticketManager.buy('mail@mail.com', 15)

console.log(`Para el evento buy, tenemos ${ticketManager.listenerCount('buy')} escucha(s)`)
console.log(`Para el evento error, tenemos ${ticketManager.listenerCount('error')} escucha(s)`)