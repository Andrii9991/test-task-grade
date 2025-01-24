<template></template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getReviews } from "./api/mainRequests";

onMounted(async () => {
  await getReviews();
});
</script>

<style scoped></style>
