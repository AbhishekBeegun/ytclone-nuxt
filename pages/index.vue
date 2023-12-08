<template>
    <Navbar/>
    <div class="pt-20 md:px-4 lg:px-20"> 
        <HomeCategoSlider />
     <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
         <MainCard v-for="index in 10" :key="index" :index="index" />
         <MainCardSkeleton v-for="index in 10" />
     </div>
    </div>
</template>
