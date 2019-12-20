let game = {
    gameStart() {
        let playerTurn = +prompt('Ходит игрок.\n 1 - камень, 2 - ножницы, 3 - бумага, другое - закончить игру')
        let compTurn = Math.floor(Math.random() * 3) + 1

        if (playerTurn <= 3 && playerTurn != false) {
            game.checkWinner(playerTurn, compTurn)
        } else {
            console.log('Игра окончена.')
        }
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
            console.log('Победил игрок! :)')
        } else if (this.getBoolean(winComb.compWin)) {
            console.log('Победил комп! :(')
        } else {
            console.log('Ничья, товарищи!')
        }
    }
}

const rulesBtn = document.querySelector('.rules-btn')
const rulesBlock = document.querySelector('.rules')

rulesBtn.addEventListener('click', () => {
    rulesBlock.classList.contains('visible') ? rulesBlock.classList.remove('visible') : rulesBlock.classList.add('visible')
})