const TicketManager = require('./ticketManager')

const ticketManager = new TicketManager(10)

ticketManager.on('buy', () => {
    console.log('Alguien compro un ticket.')
})

ticketManager.once('buy', () =>{
    console.log('Una unica vez')
})

ticketManager.buy('mail@mail.com', 20)
ticketManager.buy('mail@mail.com', 20)
ticketManager.buy('mail@mail.com', 15)
ticketManager.buy('mail@mail.com', 15)