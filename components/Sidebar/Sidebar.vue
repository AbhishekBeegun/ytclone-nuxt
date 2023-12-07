<script setup>
const isOpen = ref(false)
</script>

<template>
  <div>
    <button @click="isOpen = true" class="hover:bg-slate-700 rounded-full p-1 mt-1" >
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"></path></svg>
    </button>

    <USlideover v-model="isOpen" side="left">
      <div class="p-4 flex-1">
      </div>
    </USlideover>
  </div>
</template>