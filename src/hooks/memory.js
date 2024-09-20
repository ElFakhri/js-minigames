import { ref, watch, reactive } from 'vue';

function initGrid(row, col){
    const grid = [];
    const possibleValues = [0,1,2,3,4,5,6,7,8,9];

    // Generate 8 pairs (since the total array length is 16)
    for (let i = 0; i < (row*col)/2; i++) {
        const randomValue = possibleValues[Math.floor(Math.random() * possibleValues.length)];
        // Push the same value twice to create a pair
        grid.push(randomValue, randomValue);
    }

    // Shuffle the array to randomize the positions of the pairs
    for (let i = grid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [grid[i], grid[j]] = [grid[j], grid[i]]; // Swap elements
    }

    return grid.map((i) => {
        return {
            value: i,
            open: false,
        }
    });
}

export default function useMemoryGame (row, col){
    const grid = ref(initGrid(row, col))
    const matches = ref([])
    const guesses = ref(0)
    const selected = ref([])
    const numSelected = ref(0)
    const canSelect = ref(true)

    const status = reactive({
        matches: matches,
        guesses: guesses,
    })

    function isMatch(a, b){
        guesses.value += 1
        if (grid.value[a].value != grid.value[b].value){
            return false
        }   
        matches.value.push(a, b)
        return true
    }

    async function selectCell(index){
        if (! canSelect.value){
            return
        }
        if (matches.value.includes(index) || selected.value.includes(index)){
            return;
        }
        
        selected.value.push(index)
        grid.value[index].open = true
        numSelected.value += 1
    }

    watch(numSelected, async (newNum, oldNum) => {
        if (newNum == 2){
            canSelect.value = false
            setTimeout(() => {
                if(! isMatch(...selected.value)){
                    grid.value[selected.value[0]].open = false
                    grid.value[selected.value[1]].open = false
                }
                selected.value = []
                numSelected.value = 0
                canSelect.value = true
            }, 300)
        }
    })

    function restartGame(){
        grid.value = initGrid(row, col)
        matches.value = []
        guesses.value = 0
    }

    return {grid, status, restartGame, selectCell}
}