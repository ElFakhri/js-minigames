<script setup>
const props = defineProps({
    card: Object
})

</script>

<template>  
    <div class="card" :class="props.card.open ? '' : 'closed'">
        <img :src="`https://placehold.co/400?text=${props.card.value}`" width="100%">
    </div>
</template>

<style>
.card {
    display: inline;
}
.closed > img {filter: brightness(0)}
</style>