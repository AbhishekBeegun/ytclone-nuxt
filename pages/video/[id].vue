<script setup>
const route = useRoute()
// {{route.params.id}}

import { VideoQuery } from '../utils/VideoQuery'
 const queryfor = encodeURIComponent(route.params.id);
 const { url, options } = VideoQuery(queryfor);

const { data } = await useFetch(url , options);
// const { data } = await useFetch('/api/watchvideo') ;

const videoDetails = ref('')

setTimeout(() => {
  videoDetails.value = data._rawValue.items
}, 1500);

</script>

<template>
    <Navbar/>
    <div class="pt-20 md:px-4 lg:px-20">
      <div v-if="videoDetails && videoDetails.length > 0">
        <SingleVideo :data="videoDetails[0]" />
      </div>

      <div v-else>
       <SingleVideoSkeleton />
      </div>
    </div>

    <UNotifications color="red" />
</template>