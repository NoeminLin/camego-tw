const Tickets = [
{id:1,color:"orange",txt:"不同特質的人不只要和睦相處，還要「發揮」自己的特質，才能達成<真正的烏托邦>。"},
{id:2,color:"orange",txt:"特質，就是你的獨一無二；能發揮你的特質和才幹的人，只有獨一無二的你自己。"},
{id:3,color:"orange",txt:"「特質和才幹」左右於如何造就，所以一定要開發。"},
{id:4,color:"orange",txt:"人會因著＜缺點＞而不被珍惜，但改正並消除＜缺點、錯誤與矛盾＞就會成為「傑作」。"},
{id:5,color:"orange",txt:"邊改正、開發自己邊使用，這樣就能在有限的人生中，使用很久而有益處。"},
{id:6,color:"purple",txt:"在造就＜自己＞時，如果連辛苦又困難的部分也造就了，也會成為傑作品一般的人。"},
{id:7,color:"purple",txt:"錯誤地拿自己和他人比較會很失望；用＜自己獨一無二的特質＞來衡量，就會充滿希望。"},
{id:8,color:"purple",txt:"只看到缺點，就會覺得自己不足；看著專長和優點，就會了解自己的寶貴。"},
{id:9,color:"purple",txt:"「現在的」是＜過程＞。不要只看著「現在的」就感到灰心，而是努力去做吧！做多少會產生變化多少，越去做就越會變成完全截然不同的世上。"},
{id:10,color:"purple",txt:"＜人的潛能＞會隨著如何思考、如何行動來發展並呈現。"},
{id:11,color:"blue",txt:"＜特質和才幹＞是「　神賜給每個人的禮物」、是「特權」。"},
{id:12,color:"blue",txt:"若在＜內心＞中輸掉，最後就會輸掉。＜內心＞不能被折斷。"},
{id:13,color:"blue",txt:"＜想法＞扮演「核心、根本、生命的角色」，所以要好好＜思考＞，並時常寶貴地管理＜自己的想法＞。"},
{id:14,color:"blue",txt:"「產生變化」就是＜奇蹟＞。不要只期望「大的」，而是從「小的」開始做起吧！改正語氣、習慣、行為，成為「生活中的英雄」吧！"},
{id:15,color:"blue",txt:"隨著「想做的想法和內心的位置」站在哪裡，就可以知道能不能做到。"}
]

const body = document.getElementsByTagName('BODY')[0]
const btn = document.querySelector('#btn')

function getNewTicket() {
    const randomNumber = Math.floor(Math.random() * Tickets.length) // 隨機0-14
    let ticket = Tickets[randomNumber]
    ticket.username = username.value
    localStorage.setItem('ticket', JSON.stringify(ticket))
    return ticket
}


btn.addEventListener('click', function getTicket() {
    const nameValue = username.value
    // 判斷使用者是否有抽過箴言
    const userTickets = JSON.parse(localStorage.getItem('ticket')) || []
    let ticket
    
    switch (userTickets.length > 0) {
        case true :
            const hasUserTicket = userTickets.filter(ticket => ticket.username === nameValue)
            if ( hasUserTicket ) {
                ticket = hasUserTicket[0]
            } else {
                ticket = getNewTicket()
            }
            break
        default :
            ticket = getNewTicket()
    }
    
    body.innerHTML = `<h1>${ticket.username}您抽到的箴言是:${ticket.id}${ticket.txt}</h1>`
    
})