<script setup>
import { ref } from 'vue';
import useConnect4 from '../hooks/connect4';
const {board, tileClicked: enterChip, winner, currentPlayer} = useConnect4()
const styleHover = ref({})

function styleTile(tileValue) {
    if (tileValue == -1){
        return 'red'
    }
    else if (tileValue == 1) {
        return 'yellow'
    }
}

function showCurrentColor(index){
    // return
    let color; 
    if (currentPlayer.value == 1) {
        color = "yellow"
    }
    else {color = "red"}
    styleHover.value = {
        "left": `${5 + index * 80}px`,
        "background-color": color
    }
}

function tileClicked(colIndex){
    enterChip(colIndex)
    if (currentPlayer.value == 1) {
        styleHover.value["background-color"] = 'yellow'
    }
    else {
        styleHover.value["background-color"] = 'red'
    }
    console.log(styleHover.value)
}

</script>

<template>
    <h1>Connect Four</h1>
    <p>{{ winner }}</p>
        <div class="board">
            <div class="tile-hover" :style="styleHover"></div>
            <div class="row" v-for="rows, rowIndex in board">
                <div class="tile" v-for="tile, colIndex in rows" @click="tileClicked(colIndex) ">
                    <div :class="styleTile(tile)"@mouseover="() => showCurrentColor(colIndex)"></div> 
                </div>
            </div>
        </div>
</template>

<style scoped>
.board {
    background-color: rgb(27, 50, 222);
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    position: relative;
}

.row {
    display: flex;
}

/* .tile {

} */

.tile-hover {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 100%;
    /* background-color: pink; */
    top: -80px;
    /* left: 160px; */
}

.tile *{          /* for the circle */
    height: 70px;
    width: 70px;
    display: flex;
    border-radius: 100%;
    background-color: white;
    margin: 5px;
}

.red {
    background-color: rgb(248, 40, 40);
}

.yellow {
    background-color: rgb(234, 255, 49);
}


</style>