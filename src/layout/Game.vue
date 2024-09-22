<template>
<nav>
    <h1>Mini Game</h1>
    <RouterLink to="/">
        <svg width="16px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
        <p>Back</p>
    </RouterLink>
</nav>
<div class="game">
    <slot></slot>    
</div>
</template>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 4rem;
        background: rgb(150, 221, 150);
    }

    nav h1{
        font-weight: 700;
        font-size: 2rem;
    }

    nav a{
        display: flex;
        color: white;
        padding: 0.75rem 1.5rem;
        background-color: black;
        border-radius: 1rem;
        font-weight: 700;
        gap: 10px;
    }

    nav a svg{
        transform: translateY(-2px);
    }

    .game{
        padding-top: 6rem;
    }
</style>