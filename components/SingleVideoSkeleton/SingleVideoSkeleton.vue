
<template>
    <div class="flex flex-col gap-3">
        <USkeleton class="md:h-[350px] lg:h-[500px] rounded-xl w-3/4" :ui="{background: 'bg-gray-300 dark:bg-gray-800'}"/>
        <USkeleton class="h-8 w-5/12 py-2 rounded-full" :ui="{background: 'bg-gray-300 dark:bg-gray-800'}"/>
        <USkeleton class="h-11 w-12 rounded-full" :ui="{background: 'bg-gray-300 dark:bg-gray-800'}" />
    </div>
</template>