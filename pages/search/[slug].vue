<script setup>
const route = useRoute()


const items ='';


</script>

<template>
    <Navbar/>

    <div class="pt-20 md:px-4 lg:px-20">
       <h1> {{route.params.slug}}</h1>

       <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3"
       v-if="items == '' "><MainCardSkeleton v-for="index in 12" />
       </div>

       <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3" v-if="items">
        items
        <!-- <MainCard v-for="(item, index) in items" :key="index" :data="item" /> -->
       </div>
    </div>
</template>