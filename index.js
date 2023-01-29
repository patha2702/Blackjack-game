let player = {
    name: "Rajendra",
    chips: 500
}
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""

const messageEl = document.querySelector("#message-el")
const cardsEl = document.querySelector("#cards-el")
const sumEl = document.querySelector("#sum-el")
const playerEl = document.querySelector("#player-el")

function displayPlayerInfo(){
    let playerInfo = `${player.name} : $${player.chips}`
    playerEl.textContent = playerInfo
}

displayPlayerInfo()

function display(element, message){
    element.textContent = message
}

function getSum(){
    let sum = 0
    cards.forEach(item => {
        sum += item
    })
    return sum
}


function renderGame(){
    let cardInfo = "Cards: "
    let sum = getSum()
    cards.forEach(card => {
        cardInfo += ` ${card}`
    }) 
    display(cardsEl, cardInfo)
    display(sumEl, `Sum: ${sum}`)

    if (sum < 21){
        message = "Do you want to draw a new card?"
    }else if (sum > 21){
        isAlive = false
        message = "You are out of the game!"
    }else {
        hasBlackjack = true
        isAlive = false
        message = "Wohoo! You've got Blackjack"
    }
    
    display(messageEl, message)
}
function startGame(){
    if (!isAlive){
        // setting the status of the player
        isAlive = true

        // Getting the first card after starting the match
        let firstCard = getRandomCard()
        cards.push(firstCard)
        // Getting the second card after starting the match
        let secondCard = getRandomCard()
        cards.push(secondCard)
        renderGame()
    }
}

function newCard(){
    if (isAlive && !hasBlackjack){
        let newCard = getRandomCard()
        cards.push(newCard)
        renderGame()
    }
    
}

function getRandomCard(){
    let sum = getSum()
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1){
        if ((randomCard + sum) !== 21){
            randomCard = 11
        }
    }else if (randomCard > 10){
        randomCard = 10
    }
    return randomCard
}