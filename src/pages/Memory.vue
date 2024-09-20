<script setup>
import MemoryCard from '../components/MemoryCard.vue';
import useMemoryGame from '../hooks/memory'; 

const {grid, matches, guesses, restartGame} = useMemoryGame()


</script>

<template>
    <div class="cards">
        <MemoryCard v-for="i in grid" :value="i"></MemoryCard>
    </div>
</template>

<style>
.cards {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
}
</style>