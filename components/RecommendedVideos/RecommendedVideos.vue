<script setup>

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const {data} = props ; 

const formatDate = (dateString) => {
  const currentDate = new Date();
  const publishDate = new Date(dateString);
  const diffMonths = currentDate.getMonth() - publishDate.getMonth() + (12 * (currentDate.getFullYear() - publishDate.getFullYear()));

  if (diffMonths === 0) {
    return 'this month';
  } else if (diffMonths < 12) {
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  } else {
    const diffYears = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;
    const yearString = diffYears > 1 ? 'years' : 'year';
    const monthString = remainingMonths > 1 ? 'months' : 'month';

    if (remainingMonths === 0) {
      return `${diffYears} ${yearString} ago`;
    } else {
      return `${diffYears} ${yearString} ${remainingMonths} ${monthString} ago`;
    }
  }
};
</script>

<template>
    <NuxtLink :to="`/video/${data.id.videoId}`" >

        <div class="flex md:flex-col lg:flex-row pb-4">
            <div class="h-24 lg:w-1/2 overflow-hidden rounded-lg">
                <NuxtImg :src=data.snippet.thumbnails.medium.url class="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-in-out" />
            </div>

            <div class="flex flex-col pl-2 lg:w-1/2">
                <p class="font-medium lg:pb-1 line-clamp-2 ">{{data.snippet.title}}</p>
                <p class="text-sm dark:text-gray-300 lg:pb-1">{{data.snippet.channelTitle}}</p>
                <p class="text-xs dark:text-gray-300">282K views &#8226 <span>{{ formatDate(data.snippet.publishedAt) }}</span></p>
            </div>
        </div>

    </NuxtLink>

</template>