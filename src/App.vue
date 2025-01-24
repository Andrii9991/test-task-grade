<template>
  <div class="flex flex-col items-center justify-center h-[100vh]">
    <TheReview />
  </div>
</template>

<script setup lang="ts">
import TheReview from "./components/TheReview.vue";
import { onMounted, ref } from "vue";
import { getReviews } from "./api/mainRequests";

let reviewsData = ref<any>([]);

onMounted(async () => {
  const response = await getReviews();
  reviewsData.value = response[0];
});
</script>

<style scoped></style>
