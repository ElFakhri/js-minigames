<script setup>
import MemoryCard from '../components/MemoryCard.vue';
import useMemoryGame from '../hooks/memory'; 
import Game from '../layout/Game.vue';

const [row, col] = [4, 4];
const {grid, status, restartGame, selectCell} = useMemoryGame(row, col)

const style = {
    "grid-template-rows": `repeat(${row}, 100px)`,
    "grid-template-columns": `repeat(${col}, 100px)`,
}

</script>

<template>
    <Game>
        <div>
          Current Guesses: {{ status.guesses }}
        </div>
        <div class="cards" :style="style">
            <MemoryCard 
                v-for="card, index in grid" 
                :card="card" 
                @click="selectCell(index)"
            />
        </div>
        <button @click="restartGame">Restart</button>
    </Game>
</template>

<style>
.cards {
    display: grid;
    gap: 5px;
    justify-content: center;
}
</style>