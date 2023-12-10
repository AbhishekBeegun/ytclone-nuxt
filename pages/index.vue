<script setup>

const { data } = await useFetch('/api/homedata');

const homeitems = ref('');

setTimeout(() => {
  homeitems.value = data._rawValue.items
}, 5000);

</script>

<template>
    <Navbar/>
    <div class="pt-20 md:px-4 lg:px-20"> 
        <HomeCategoSlider />
        <div v-if="homeitems" class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
           <MainCard v-for="(item, index) in homeitems" :key="index" :data="item" /> 
        </div>
          
        <div v-else class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
            <MainCardSkeleton v-for="index in 20" :key="index" />            
        </div>
    </div>
</template>

