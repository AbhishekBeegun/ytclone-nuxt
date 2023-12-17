<script>
export default {
  data() {
    return {
        categories: [
        'Technology',
        'Science',
        'Travel',
        'Food',
        'Health',
        'Fashion',
        'Sports',
        'Music',
        'Movies',
        'Books',
        'Business',
        'Art',
        'Home & Garden',
        'Fitness',
        'Pets',
        'Cars',
        'Education',
        'Finance',
        'Nature',
        'Gaming',
      ],
    };
  },

};
</script>

<template>
    <div class="slider flex flex-nowrap overflow-x-scroll whitespace-nowrap gap-4">
       <NuxtLink :to="`/search/${category}`" v-for="(category, index) in categories" :key="index">
         <p class="font-medium text-sm mb-1 px-3 bg-gray-200 dark:bg-[#3F3F3F] hover:bg-gray-300 dark:hover:!bg-gray-400 rounded-md py-1 transition-all ease-in-out ">{{ category }}</p>
       </NuxtLink>
    </div>
  </template>

<style scoped>
.slider::-webkit-scrollbar {
  display: none;
}
</style>