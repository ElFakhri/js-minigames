import { ref } from 'vue';

export default function useTTT (){
    const statusText = ref("X's turn")
    const cells = ref([
        "", "", "", "", "", "", "", "", ""
    ])
    const winner = ref("")
    const currentPlayer = ref("X");
    const running = ref(true);

    const mapper = {X: 1, O: -1}

    const winConds = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function checkWinner(){
        for(let i=0; i<winConds.length; i++){
            let score = 0
            for(let j=0; j<winConds[i].length; j++){
                let position = winConds[i][j]
                score += mapper[cells.value[position]]
            }

            if (Math.abs(score) == 3){
                return score
            }
        }
    }

    function cellClicked(index){
        if (cells.value[index] != "" || !running.value ) {
            return;
        }
        
        cells.value[index] = currentPlayer.value;
        let score = checkWinner()
        if (score){
            running.value = false
            winner.value = (score == 3) ? "X" : "O"
            return
        }

        currentPlayer.value = (currentPlayer.value == "X") ? "O" : "X";
        statusText.value = `${currentPlayer.value}'s turn`;
    }


    function restartGame(){
        winner.value = ""
        cells.value = ["", "", "", "", "", "", "", "", ""]
        statusText.value = "X's turn"
        running.value = true
    }

    return {cells, winner, cellClicked, restartGame}
}