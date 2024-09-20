<script setup>
import useTTT from '../hooks/tictactoe';
import Main from '../layout/Main.vue';

const {cells, winner, cellClicked, restartGame} = useTTT()

</script>

<template>
  <Main>
    <h1>Tic Tac Toe</h1>
    <h2 v-if="winner">The winner is {{ winner }}</h2>
    <div class="board">
      <div class="cell" v-for="cell, index in cells" @click="cellClicked(index)"> {{ cell }}</div>
    </div>
    <div>{{ statusText }}</div>
    <button id="restartBtn" @click="restartGame">Restart</button>
  </Main>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, auto);
  width: 225px;
  margin: auto;
  font-family: "Permanent Marker"
}

.cell {
  width: 75px;
  height: 75px;
  border: 2px solid;
  box-shadow: 0 0 0 2px;
  line-height: 75px;
  text-align: center;
  font-size: 50px;
}
</style>