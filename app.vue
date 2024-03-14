<template>
  {{ example.data }}
</template>
<script setup>
const example = await useFetch('https://example.com')
</script>