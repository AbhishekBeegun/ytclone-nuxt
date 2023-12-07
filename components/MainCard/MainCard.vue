
import type { NuxtLink } from '#build/components';
<script setup>
const props = defineProps({
  index: {
    type: Object,
  },
});
const { index } = props;
</script>

<template>
    <div>
        <NuxtLink :to="'/video/' + index">
            <div class="rounded-xl h-44 overflow-hidden">
                <NuxtImg src="https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlsZGVyfGVufDB8fDB8fHww" class="w-full h-full rounded-xl object-cover hover:scale-110 transition-all ease-in-out" />
            </div>
            </NuxtLink>
            
        <div class="flex gap-2 items-center pt-2">
            <UAvatar
            size="sm"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            />

            <p class="leading-tight font-semibold line-clamp-2">Build and Deploy a Full Stack Next.js 14 Application | React, Next JS 14, TypeScript, Tailwind CSS
            JavaScript Mastery</p>
        </div>

        <div class="py-2">
            <p class="text-gray-700 dark:text-gray-300 text-sm ml-10">JavaScript Mastery</p>
            <p class="text-gray-700 dark:text-gray-300 text-sm ml-10">282K views &#8226 5 months ago</p>
        </div>
    </div>
</template>