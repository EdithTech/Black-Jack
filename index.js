let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector(".cards-el");

let cards = [];

function getRandomCard() {
    randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum == 1) {
        return 11;
    } else if (randomNum > 10 && randomNum <= 13) {
        return 10;
    } else {
        return randomNum;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards[0] = firstCard;
    cards[1] = secondCard;

    renderGame();
    let playerEl = document.getElementById("player-el");
    playerEl.textContent = player.name + ": $" + player.chips;
}
function renderGame() {
    sumEl.textContent = "Sum : " + sum;
    cardsEl.textContent = "Cards : ";
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " ";
    }


    if (sum <= 20) {
        message = "Do you want to draw a card?";
    } else if (sum === 21) {
        message = "Woooo! You have Black Jack";
        hasBlackJack = true;
    } else {
        message = "Game Over";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing the new Card");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}