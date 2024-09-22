<template>
    <div class="container">
        <slot/>
    </div>
</template>

<style>
    .container{
        max-width: min(100%, 900px);
        margin: 0px auto;
    }
</style>