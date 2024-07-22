document.addEventListener('DOMContentLoaded', () => {
    const doska = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    const boardElement = document.getElementById('board');
    const statusElement = document.getElementById('status');
    const restartButton = document.getElementById('restart');
    let currentPlayer = 'X';

    function pechatDoski() {
        boardElement.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.textContent = doska[i][j];
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', sdelatHod);
                boardElement.appendChild(cell);
            }
        }
    }

    function etoPobeda(igrok) {
        for (let i = 0; i < 3; i++) {
            if (doska[i][0] === igrok && doska[i][1] === igrok && doska[i][2] === igrok) return true;
            if (doska[0][i] === igrok && doska[1][i] === igrok && doska[2][i] === igrok) return true;
        }
        if (doska[0][0] === igrok && doska[1][1] === igrok && doska[2][2] === igrok) return true;
        if (doska[0][2] === igrok && doska[1][1] === igrok && doska[2][0] === igrok) return true;
        return false;
    }

    function etoNichya() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (doska[i][j] === ' ') return false;
            }
        }
        return true;
    }

    function sdelatHod(event) {
        const row = event.target.dataset.row;
        const col = event.target.dataset.col;
        if (doska[row][col] === ' ') {
            doska[row][col] = currentPlayer;
            pechatDoski();
            if (etoPobeda(currentPlayer)) {
                statusElement.textContent = `Игрок ${currentPlayer} побеждает!`;
                boardElement.removeEventListener('click', sdelatHod);
            } else if (etoNichya()) {
                statusElement.textContent = 'Игра закончилась в ничью!';
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                statusElement.textContent = `Ход игрока ${currentPlayer}`;
            }
        } else {
            statusElement.textContent = 'Неправильный ход, попробуйте снова.';
        }
    }

    restartButton.addEventListener('click', () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                doska[i][j] = ' ';
            }
        }
        currentPlayer = 'X';
        statusElement.textContent = `Ход игрока ${currentPlayer}`;
        pechatDoski();
    });

    pechatDoski();
    statusElement.textContent = `Ход игрока ${currentPlayer}`;
});