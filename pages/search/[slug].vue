<script setup>
const route = useRoute()

const { data } = useFetch('/api/searchquery') 
const searchResult = ref('');

setTimeout(() => {
    searchResult.value = data.data._rawValue.items
}, 5000);


</script>

<template>
    <Navbar/>

    <div class="pt-20 md:px-4 lg:px-20">
       <h1> {{route.params.slug}}</h1>

       <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3"
       v-if="searchResult" >
       <MainCard v-for="(item, index) in searchResult" :key="index" :data="item" /> 

       </div>

       <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3" v-else>
        <MainCardSkeleton v-for="index in 20" /> 
       </div>
    </div>
</template>