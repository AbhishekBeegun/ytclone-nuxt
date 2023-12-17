<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const {data} = props ; 

</script>

<template>
    <div class="flex gap-5 px-2">
        <div>
            <NuxtImg 
            class="rounded-full w-48 h-48"
            :src="data.snippet.thumbnails.high.url" />
        </div>

        <div>
            <h1 class="text-5xl font-semibold">{{data.snippet.title}}</h1>
            <p class="py-3 text-black dark:text-gray-400"><span class="pr-2">{{data.snippet.customUrl}}</span>&#8226;<span class="px-2">{{data.statistics.subscriberCount}} Subcribers</span> &#8226;<span class="px-2">{{data.statistics.videoCount}} Videos</span></p>

            <p class="text-black dark:text-gray-400 pl-1 pb-3">{{data.snippet.description}}</p>
            
            <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-red-500 group-hover:from-purple-600 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
              <span class="relative rounded-full px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                Subscribe
              </span>
             </button>
        </div>
    </div>
</template>