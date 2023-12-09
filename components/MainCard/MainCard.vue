
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data } = props;


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
    <div>
        <NuxtLink :to="'/video/' + data.id.videoId">
            <div class="rounded-xl h-44 overflow-hidden">
                <NuxtImg :src="data.snippet.thumbnails.high.url" class="w-full h-full rounded-xl object-cover hover:scale-110 transition-all ease-in-out" />
            </div>
            </NuxtLink>
            
        <div class="flex gap-2 items-center pt-2">
            <UAvatar
            size="sm"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            />

            <p class="leading-tight font-semibold line-clamp-2">{{ data.snippet.title }}</p>
        </div>

        <div class="py-2">
            <p class="text-gray-700 dark:text-gray-300 text-sm ml-10">{{ data.snippet.channelTitle }}</p>
            <p class="text-gray-700 dark:text-gray-300 text-sm ml-10">282K views &#8226 <span>{{ formatDate(data.snippet.publishedAt) }}</span></p>
        </div>
    </div>
</template>