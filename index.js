let cards = [];
let flag = true;
let start = false;
let messageEl = document.querySelector("#message");
let cardEl = document.querySelector("#cards");
let sumEl = document.querySelector("#sum");
let chipEl = document.querySelector("#chip");


let player = {
    Name: "Player1",
    chips: 145
}


function newGame() {
    if (start === false) {
        let num1 = getRandomNumbers();
        let num2 = getRandomNumbers();
        cards = [num1, num2];
    }
    chipEl.textContent = player.Name + ": $" + player.chips;
    start = true;
    renderGame();
}

function getRandomNumbers() {
    let num = Math.floor((Math.random() * 13) + 1);
    if (num == 1) return 11;
    else if (num > 10) return 10;
    return num;
}

function renderGame() {
    let sum = 0;

    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
    }
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length - 1; i++) {
        cardEl.textContent += cards[i] + ",";
    }
    cardEl.textContent += cards[cards.length - 1];
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        messageEl.textContent = "Pick another card";
    }
    else if (sum === 21) {
        messageEl.textContent = "BlackJack!!! Congratulations";
        messageEl.style.color = "Green";
        player.chips += 100;
        chipEl.textContent = player.Name + ": $" + player.chips;
        flag = false;
    }
    else {
        messageEl.textContent = "Game Over!!! Better Luck Next Time";
        messageEl.style.color = "Red";
        player.chips -= 100;
        chipEl.textContent = player.Name + ": $" + player.chips;
        flag = false;
    }
}

function newCard() {
    if (start === false) {
        alert("Please select NEW GAME to start");
    }
    else if (flag === false) {
        alert("Game Over!! Please click on RESET to start again");
    }
    else if (flag && start) {
        cards.push(getRandomNumbers());
        renderGame();
    }
}

function Reset() {
    messageEl.textContent = "Want to play a round?";
    cardEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    messageEl.style.color = "Black";
    while (cards.length != 2) {
        cards.pop();
    }
    flag = true;
    start = false;
    chipEl.textContent = "";
}