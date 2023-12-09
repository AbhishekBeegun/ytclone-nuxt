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
    <div>
        Chanel video

        {{data}}
    </div>
</template>