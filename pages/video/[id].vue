<script setup>
const route = useRoute()
// {{route.params.id}}
</script>

<template>
    <Navbar/>

    <div class="pt-20 md:px-4 lg:px-20">
        <SingleVideo />
    </div>
</template>