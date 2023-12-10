<script setup>
const route = useRoute()
// {{route.params.id}}
const { data } = await useFetch('/api/watchvideo') ;

const videoDetails = ref('')

setTimeout(() => {
  videoDetails.value = data._rawValue.items
}, 5000);

</script>

<template>
    <Navbar/>
    <div class="pt-20 md:px-4 lg:px-20">
      <div v-if="videoDetails">
        <SingleVideo :data="videoDetails" />
      </div>

      <div v-else>
       <SingleVideoSkeleton />
      </div>
    </div>

    <UNotifications color="red" />
</template>