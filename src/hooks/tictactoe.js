import { ref } from 'vue';

export default function useTTT (){
    const statusText = ref("X's turn")
    const cells = ref([
        "", "", "", "", "", "", "", "", ""
    ])
    const winner = ref("")
    const currentPlayer = ref("X");
    const running = ref(true);

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
            const pos1 = cells.value[winConds[i][0]];
            const pos2 = cells.value[winConds[i][1]];
            const pos3 = cells.value[winConds[i][2]];


            if (pos1 == pos2 && pos2 == pos3 && pos1 != "") {
                running.value = false
                winner.value = pos1
            }
        }
    }

    function cellClicked(index){
        if (cells.value[index] != "" || !running.value ) {
            return;
        }
        
        cells.value[index] = currentPlayer.value;

        
        let isWin = checkWinner()
        if (isWin){
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

    return {cells, winner, statusText, cellClicked, restartGame}
}