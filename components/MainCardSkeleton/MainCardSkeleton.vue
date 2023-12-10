<template>
    <div>
        <USkeleton class="rounded-xl h-44" :ui="{background: 'bg-gray-300 dark:bg-gray-800'}" />
    
        <div class="flex gap-2 items-center pt-2">

            <USkeleton class="h-8 w-9 rounded-full" :ui="{background: 'bg-gray-300 dark:bg-gray-800'}"/>
            <USkeleton class="h-4 w-full" :ui="{background: 'bg-gray-300 dark:bg-gray-800'}" />
           
        </div>

        <div class="py-2">
            <USkeleton class="h-4 w-1/2 ml-10" :ui="{background: 'bg-gray-300 dark:bg-gray-800'}" />
        </div>
    </div>
</template>