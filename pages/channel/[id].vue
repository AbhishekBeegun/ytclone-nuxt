<script setup>
 const route = useRoute() 
 
 const { data : channelDetailsData } = useFetch('/api/channeldetails');
 const { data: channelvideosData } = useFetch('/api/channelvideos');

 console.log(channelvideosData)

 
</script>
<template>
    <Navbar/>   
    <div class="pt-20 md:px-4 lg:px-20">

     <ChannelDetails :data="channelDetailsData.items[0]" />
     <UDivider class="py-6" />
   
      <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
        <MainCard v-for="video in channelvideosData.items" :data="video" />
      </div>
    </div>
</template>