<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    name: String,
    image: String,
    to: String,
})
</script>

<template>
    <RouterLink class="card" :to="props.to">
        <div class="card-image">
            <img :src="props.image" :alt="props.name">
        </div>
        <div class="card-name">
            <h3>{{ props.name }}</h3>
        </div>
    </RouterLink>
</template>

<style scoped>
    .card{
        width: 250px;
        overflow: hidden;
        border: 12px black solid;
        padding: 1rem;
    }
    .card-image img{
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
    .card-name{
        text-align: center;
        font-size: 2rem;
        padding-top: 0.75rem;
    }
</style>