<script setup>
import Container from '../components/Container.vue';
import GameCard from '../components/GameCard.vue';

const games = [
    {name: "Tic Tac Toe", image: "https://seeklogo.com/images/T/tic-tac-toe-logo-0D39D7E421-seeklogo.com.png", to: "/games/tictactoe"},
    {name: "Memory Game", image: "https://h5p.org/sites/default/files/styles/medium-logo/public/logos/memory-game-icon.png?itok=bIQqHE7Y", to: "/games/memory"},
]
</script>

<template>
    <Container>
        <h1>
            Mini Game
        </h1>
        <div class="games">
            <GameCard 
                v-for="game in games"
                :name="game.name"
                :image="game.image"
                :to="game.to"
            />
        </div>
    </Container>
</template>
 
<style scoped>
    h1{
        margin-top: 80px;
        font-size: 64px;
    }

    .games{
      margin-top: 4.5rem;
      display: flex;
      justify-content: space-evenly;
      column-gap: 20px
    }
</style>