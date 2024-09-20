<script setup>
import { ref } from 'vue';

const props = defineProps({
    value: Number
})

const isClicked = ref(false)

</script>

<template>
    <div class="card" :class="isClicked ? '' : 'closed'">
        <img :src="`https://placehold.co/400?text=${props.value}`" width="100%" @click="isClicked = !isClicked">
    </div>
</template>

<style>
.card {
    display: inline;
}
.closed > img {filter: brightness(0)}
</style>