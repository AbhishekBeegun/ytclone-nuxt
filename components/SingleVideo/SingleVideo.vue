<script>
  export default {
    data() {
      return {
        isFullScreen: false,
      };
    },
    methods: {
      toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
      },
    },
  };
</script>

<template>
  <div class="flex">

    <div class="w-3/4">
      <div class="bg-red-500 md:h-[350px] lg:h-[500px] rounded-xl ">
        Video Inside Here
      </div>

      <div class="py-2">
        <h2 class="text-2xl font-semibold">How to hold a machine.</h2>
        
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
              <p class="text-lg font-semibold">Jack Ma</p>
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
          <p>144,442 views 14 Jul 2022</p>
        </div>

      </div>
    </div>
      
    <div class="pl-4 w-1/4">
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>     
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>      
      <RecommendedVideos/>       

    </div>
  </div>
</template>
  <style scoped>
  .shadow-lg {
    box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);
  }
  .shadow-xl {
    box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05);
  }
  </style>
  