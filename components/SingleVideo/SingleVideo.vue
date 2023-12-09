<script setup>

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const {data} = props ; 

const isFullScreen = ref(false);

const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value;
};


const formatNumber = (number) => {
  if (typeof number === 'number') {
    return number.toLocaleString('en-US'); 
  }
  return number; 
};
</script>

<template>
  <div class="flex">

    <div class="w-3/4">
      <div class="md:h-[350px] lg:h-[500px] rounded-xl shadow-xl border dark:border-none">
        <NuxtImg :src="data[0].snippet.thumbnails.maxres.url" class="w-full h-full object-contain rounded-lg" />
      </div>

      <div class="py-3">
        <h2 class="text-xl font-semibold">{{data[0].snippet.title}}</h2>
        
        <div class="flex justify-between items-center py-1 pb-3">

          <div class="flex gap-4 items-center">
            <div class="mt-1">
              <UAvatar
                size="lg"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
              />
            </div>

            <div class="">
              <p class="text-lg font-semibold">{{data[0].snippet.channelTitle}}</p>
              <p class="text-xs text-gray-300">125K subscribers</p>
            </div>

            <div class="ml-3">
              <button class="px-5 py-1 rounded-full bg-white border text-black font-semibold">Subcribe</button>
            </div>
          </div>

          <div>
            Like btn ~ dislike~ Share @ doenload ~ Click @ ...
          </div>

        </div>


        <div class=" bg-gray-300 dark:bg-slate-800 h-36 rounded-xl p-2">
          <p><span>{{ formatNumber(data[0].statistics.viewCount)}}</span> views 14 Jul 2022</p>
        </div>

      </div>
    </div>
      
    <div class="pl-4 w-1/4">
      <RecommendedVideos v-for="index of 15"/>       
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
  </style>
  