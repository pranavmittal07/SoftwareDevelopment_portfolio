document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const restartBtn = document.getElementById('restartBtn');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = parseInt(cell.getAttribute('data-index'));

        if (gameBoard[cellIndex] !== '' || !gameActive) {
            return;
        }

        gameBoard[cellIndex] = currentPlayer;
        cell.innerText = currentPlayer;

        if (checkWin()) {
            alert(`${currentPlayer} has won!`);
            gameActive = false;
            return;
        }

        if (isDraw()) {
            alert('Game is a draw!');
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
        return winningConditions.some(condition => {
            return condition.every(index => {
                return gameBoard[index] === currentPlayer;
            });
        });
    }

    function isDraw() {
        return gameBoard.every(cell => cell !== '');
    }

    function restartGame() {
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        cells.forEach(cell => cell.innerText = '');
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartBtn.addEventListener('click', restartGame);
});
