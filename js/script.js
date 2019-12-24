const doc = document

const rulesBtn = doc.querySelector('.rules-btn')
const rulesBlock = doc.querySelector('.rules')
const btnBlock = doc.querySelector('.btn-block')
const resultsBlock = doc.querySelector('.results')
const compDisplay = doc.querySelector('.comp-display')
const playerDisplay = doc.querySelector('.player-display')
const gameField = doc.querySelector('.display-wrap')

let game = {
    playerTurn: 0,
    compTurn: 0,
    _init() {
        rulesBtn.addEventListener('click', this.showRules)
        btnBlock.addEventListener('click', this.chooseTurn)
    },
    chooseTurn(evt) {
        let playerChoose = evt.target.dataset.turn

        if (playerChoose === 'rock') game.playerTurn = 1
        if (playerChoose === 'scissors') game.playerTurn = 2
        if (playerChoose === 'paper') game.playerTurn = 3

        game.gameStart()
        game.renderTurns()
        game.showGameField()
    },
    gameStart() {
        this.compTurn = Math.floor(Math.random() * 3) + 1

        game.checkWinner(this.playerTurn, this.compTurn)

    },
    getBoolean(arr) {
        for (el in arr) {
            if (arr[el]) {
                return arr[el]
            }
        }
    },
    checkWinner(playNum, compNum) {
        const winComb = {
            playerWin: {
                first: (playNum == 1 && compNum == 2),
                second: (playNum == 2 && compNum == 3),
                third: (playNum == 3 && compNum == 1)
            },
            compWin: {
                first: (playNum == 1 && compNum == 3),
                second: (playNum == 2 && compNum == 1),
                third: (playNum == 3 && compNum == 2)
            }
        }
        if (this.getBoolean(winComb.playerWin)) {
            this.renderResults('Победил игрок! :)')
        } else if (this.getBoolean(winComb.compWin)) {
            this.renderResults('Победил комп! :(')
        } else {
            this.renderResults('Ничья, товарищи!')
        }
    },
    showRules() {
        if (rulesBlock.classList.contains('visible')) {
            rulesBlock.classList.remove('visible')
            rulesBtn.innerHTML = 'правила игры'
        } else {
            rulesBlock.classList.add('visible')
            rulesBtn.innerHTML = 'закрыть'
        }
    },
    renderResults(str) {
        resultsBlock.innerHTML = str
    },
    renderTurns() {
        setTimeout(() => {
            if (this.playerTurn !== 1) {
                playerDisplay.innerHTML = `
                                    <span> Игрок бросает... </span>
                                    <img class="scale" src='img/${this.playerTurn}.png'>
                                    `
            } else {
                playerDisplay.innerHTML = `
                                    <span> Игрок бросает... </span>
                                    <img src='img/${this.playerTurn}.png'>
                                    `
            }
            if (this.compTurn === 1) {
                compDisplay.innerHTML = `
                                    <span> ...комп в ответ! </span>
                                    <img class="scale" src='img/${this.compTurn}.png'>
                                    `
            } else {
                compDisplay.innerHTML = `
                                    <span> ...комп в ответ! </span>
                                    <img src='img/${this.compTurn}.png'>
                                    `
            }
        }, 150)

    },
    showGameField() {
        if (gameField.classList.contains('show-game-field')) {
            gameField.classList.remove('show-game-field')
            setTimeout(() => {
                gameField.classList.add('show-game-field')
            }, 200)
        } else {
            setTimeout(() => {
                gameField.classList.add('show-game-field')
            }, 200)
        }
    }
}

game._init()