const Tickets = 15
let userTickets = []
const body = document.getElementsByTagName('BODY')[0]
const btn = document.querySelector('#btn')

function getNewTicket() {
    const randomNumber = Math.floor(Math.random() * Tickets) + 1 // 隨機1-15
    console.log('randomNumber', randomNumber)
    // 產生新的ticket
    let ticket = { id: 0, username: '' }
    ticket.id = randomNumber
    ticket.username = username.value.trim()
    // 將ticket存入localStorage
    userTickets.push(ticket)
    localStorage.setItem('ticket', JSON.stringify(userTickets))
    console.log('A', ticket)
    return ticket
}


btn.addEventListener('click', function getTicket() {
    const nameValue = username.value.trim()
    // 判斷使用者是否有抽過箴言
    userTickets = JSON.parse(localStorage.getItem('ticket')) || []
    let ticket

    if (userTickets.length > 0) {
        console.log('A')
        const hasUserTicket = userTickets.filter(ticket => ticket.username === nameValue)
        if (hasUserTicket.length > 0) {
            console.log('B')
            ticket = hasUserTicket[0]
            console.log('Bticket', ticket)
        } else {
            console.log('C')
            ticket = getNewTicket()
            console.log('Cticket', ticket)
        }
    } else {
        ticket = getNewTicket()
        console.log('D')
        console.log('D', ticket)
    }

    //     body.innerHTML = `
    //     <div class="ticket-page flex-center max-width-400">
    //     <img class="ticket animate__animated animate__rotateInDownLeft" src="https://storage.googleapis.com/camego-tw.appspot.com/zootopia/ticket/${ticket.id}.png" alt="">
    //     <a class="btn btn-primary btn-download" href="https://storage.googleapis.com/camego-tw.appspot.com/zootopia/ticket/${ticket.id}.png" download="https://storage.googleapis.com/camego-tw.appspot.com/zootopia/ticket/${ticket.id}.png">下載票卡</a>
    //   </div>`

    body.innerHTML = `
    <div class="ticket-page flex-center max-width-400">
    <img class="ticket animate__animated animate__rotateInDownLeft" src="./../image/ticket/${ticket.id}.png" alt="">
    <a class="btn btn-primary btn-download" href="./../image/ticket/${ticket.id}.png" download="./../image/ticket/${ticket.id}.png">下載票卡</a>
  </div>`

})