<script setup>
const route = useRoute()

import { RecommendedVideosQuery } from '../utils/RecommendedVideosQuery'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data } = props ; 

// const isFullScreen = ref(false);

// const toggleFullScreen = () => {
//   isFullScreen.value = !isFullScreen.value;
// };
// {{route.params.id}}

 const queryfor = encodeURIComponent(route.params.id);
 const { url, options } = RecommendedVideosQuery(queryfor);

 const { data : suggestedvideo} = await useFetch(url , options);
 // const suggestedvideo = useFetch('/api/suggestedvideos');
 
 console.log(suggestedvideo._rawValue.items)
    
const formatNumber = (number) => {
  if (typeof number === 'number') {
    return number.toLocaleString('en-US'); 
  }
  return number; 
};

const toast = useToast()

const SubscribeBtn = () => {
  toast.add({ title: 'Subscribed' });
};

</script>

<template>
  <div class="flex">

    <div class="w-3/4">
      <div class="md:h-[350px] lg:h-[500px] rounded-xl">
        <NuxtImg :src="data.snippet.thumbnails.high.url" class="w-full h-full object-cover rounded-xl" />

        <!-- <iframe
        class="rounded-xl"
        width="100%"
        height="100%"
        :src="`https://www.youtube.com/embed/${data[0].id}?autoplay=1&mute=1`"  
        title="YouTube Video"
        frameborder="0"
        allow="autoplay"
        allowfullscreen
      />
       -->
       
      </div>

      <div class="py-2">
        <h2 class="text-xl font-semibold">{{data.snippet.title}}</h2>
        
        <div class="flex justify-between items-center py-1 pb-2">

          <div class="flex gap-4 items-center">
            <NuxtLink :to="`/channel/${data.snippet.channelId}`" class="mt-1">
              <UAvatar
                size="lg"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
              />
            </NuxtLink>

            <NuxtLink :to="`/channel/${data.snippet.channelId}`" class="">
              <p class="text-lg font-semibold">{{data.snippet.channelTitle}}</p>
              <p class="text-xs text-gray-300">125K subscribers</p>
            </NuxtLink>

            <div class="ml-3">
              <button @click="SubscribeBtn" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-red-500 group-hover:from-purple-600 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
              <span class="relative rounded-full px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                Subscribe
              </span>
             </button>
            </div>

          </div>

          <div class="flex gap-3">
            <div class="flex items-center dark:bg-[#202326] px-4 py-2 rounded-full">
              <button class="flex item-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/></svg>

                <span class="ml-2 font-semibold whitespace-nowrap"> {{ data.statistics.likeCount}}</span>
              </button>

              <button class="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M1 16v-4.4L4.65 3H17v13l-7 7l-1.85-1.85L9.45 16H1ZM15 5H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z"/></svg>
              </button>
            </div>

            <div class=" dark:bg-[#202326] px-4 py-2 rounded-full">
              <button class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 5v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7l-7-7m2 4.83L18.17 12L16 14.17V12.9h-2c-2.07 0-3.93.38-5.66.95c1.4-1.39 3.2-2.48 5.94-2.85l1.72-.27v-.9Z"/></svg>

                <span class="ml-2">Share</span>
              </button>
            </div>
  
          </div>

        </div>

        <div class="bg-gray-100 dark:bg-[#202326] h-32 rounded-xl py-2 px-4 overflow-scroll slider">
          <p><span>{{data.statistics.viewCount}}</span> views 14 Jul 2022</p>

          <div class="py-4 text-sm " v-html="data.snippet.description"></div>
        </div>


        <div class="py-2">
          <p class="text-xl font-bold">{{data.statistics.commentCount}} Comments</p>

          <p class="text-xs pt-10">Comments are expensive to call</p>
            
        </div>

      </div>
    </div>
      
    <div class="pl-4 w-1/4">
      <div v-if="suggestedvideo && suggestedvideo.length > 0">
        <RecommendedVideos v-for="recommendedvideo of suggestedvideo._rawValue.items" :data="recommendedvideo"/>       
      </div>

      <div v-else class="flex flex-col gap-3">
        <RecommendedVideosSkeleton v-for="index of 10" :key="index"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .shadow-lg {
    box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);
  }
  .shadow-xl {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), 0 0 01px rgba(255, 255, 255, 0.01), 0 0 10px rgba(255, 255, 255, 0.1);
  }

  .slider::-webkit-scrollbar {
  display: none;
  }
</style>
  