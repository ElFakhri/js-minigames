import { ref, watch } from 'vue';

function initGrid(){
    const grid = [];
    const possibleValues = [0, 1, 2, 3, 4];

    // Generate 8 pairs (since the total array length is 16)
    for (let i = 0; i < 8; i++) {
        const randomValue = possibleValues[Math.floor(Math.random() * possibleValues.length)];
        // Push the same value twice to create a pair
        grid.push(randomValue, randomValue);
    }

    // Shuffle the array to randomize the positions of the pairs
    for (let i = grid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [grid[i], grid[j]] = [grid[j], grid[i]]; // Swap elements
    }

    return grid;
}

export default function useMemoryGame (){
    const grid = ref(initGrid())
    const matches = ref([])
    const guesses = ref(0)
    const selected = ref([])

    function isMatch(a, b){
        if (matches.value.includes(a) | matches.value.includes(b)){
            return ;
        }
        guesses.value += 1
        if (grid.value[a] == grid.value[b]){
            matches.value.push(a, b)
            return true
        }
        return false
    }

    function selectCell(index){
        if (matches.value.includes(index) && selected.value.includes(index)){
            returnArray(16).keys()
        }
        selected.value.push(index)
    }

    watch(selected, (newSelected, oldSelected) => {Array(16).keys()
        if (oldSelected.length === 2){
            isMatch(...newSelected)
            selected.value = []
        }
    })

    function restartGame(){
        grid.value = initGrid()
        matches.value = []
        guesses.value = 0
    }

    return {grid, matches, guesses, restartGame, selectCell}
}