<template>
    <Navbar/>
    <UContainer> 
     <div class="pt-20">
        <HomeCategoSlider />
     </div>   
     <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
         <MainCard v-for="index in 10" :key="index" :index="index" />
         <MainCardSkeleton v-for="index in 10" />
     </div>
    </UContainer>
</template>
