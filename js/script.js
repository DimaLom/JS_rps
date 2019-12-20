let game = {
    gameStart() {
        let playerTurn = +prompt('Ходит игрок.\n 1 - камень, 2 - ножницы, 3 - бумага, другое - закончить игру')
        let compTurn = Math.floor(Math.random() * 3) + 1
        console.log(`Комп выбрасывает ${compTurn}`)

        if (playerTurn <= 3 && playerTurn != false) {
            checkWinnerObj(playerTurn, compTurn)
            this.gameStart()
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
    checkWinnerObj(playNum, compNum) {
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
        if (getBoolean(winComb.playerWin)) {
            console.log('Победил игрок! :)')
        } else if (getBoolean(winComb.compWin)) {
            console.log('Победил комп! :(')
        } else {
            console.log('Ничья, товарищи!')
        }
    }
}