import { ref } from "vue"

export default function useConnect4() {
    const board = ref([
        [0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0,],
    ])

    const currentPlayer = ref(1)
    const winner = ref(0)

        // Check in a specific direction for a winning condition
    function checkDirection(rowIndex, colIndex, rowDir, colDir) {
        let total = 0;
        const playerValue = board.value[rowIndex][colIndex];

        // Check backward direction
        for (let i = -3; i <= 3; i++) {
            const row = rowIndex + i * rowDir;
            const col = colIndex + i * colDir;
            if (row >= 0 && row < board.value.length && col >= 0 && col < board.value[0].length && board.value[row][col] === playerValue) {
                total++;
                if (total === 4) return true;
            } else {
                total = 0;  // Reset if not consecutive
            }
        }
        return false;
    }

    function checkWin(rowIndex, colIndex) {
        return checkDirection(rowIndex, colIndex, 0, 1) ||  // Horizontal
               checkDirection(rowIndex, colIndex, 1, 0) ||  // Vertical
               checkDirection(rowIndex, colIndex, 1, 1) ||  // Diagonal /
               checkDirection(rowIndex, colIndex, 1, -1);   // Diagonal \
    }

    function enterChip(colIndex) {
        if (winner.value != 0) {return}
        for (let i = board.value.length - 1; i >= 0; i--) {
            if (board.value[i][colIndex] === 0) {
                board.value[i][colIndex] = currentPlayer.value;
                if(checkWin(i, colIndex)){
                    winner.value = currentPlayer.value
                    break
                }
                currentPlayer.value *= -1
                break;
            }
        }
    }

    return {board, tileClicked: enterChip, winner, currentPlayer}
}