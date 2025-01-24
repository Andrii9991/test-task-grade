\
<template>
  <div
    class="mx-3 flex w-[328px] flex-col items-center rounded-lg border bg-white p-[30px] shadow-lg md:w-[98%] md:max-w-[912px] md:flex-row md:justify-between lg:max-w-[1286px]"
  >
    <!-- CONTENT BLOCK -->

    <div
      class="w-full md:flex md:max-w-[581px] md:flex-col lg:min-w-[787px] lg:flex-row xl:min-w-[797px]"
    >
      <!-- Header Block -->
      <div class="mb-5 flex w-full md:items-center lg:mb-0 lg:max-w-[388px]">
        <img
          src="../assets/images/google.svg"
          alt="Google logo"
          class="my-[6px] h-10 w-10 object-contain"
        />
        <h1
          class="ml-5 text-lg font-medium leading-[26px] md:w-full lg:text-xl"
        >
          Відгуки наших <br class="md:hidden" />
          клієнтів у Google
        </h1>
      </div>

      <!-- Main block -->
      <div
        class="mb-5 flex w-full flex-col items-start justify-center md:mb-0 md:flex-row md:items-center md:justify-start"
      >
        <div class="mb-[6px] mr-2 flex space-x-1">
          <span class="mr-5 text-2xl font-medium text-gray-800">{{
            rating
          }}</span>

          <star-rating
            v-model:rating="rating"
            :read-only="true"
            :star-size="30"
            :max-rating="5"
            :allow-half="true"
            :show-rating="false"
            :round-start-rating="false"
          ></star-rating>
        </div>

        <span class="text-sm font-normal text-gray-600 md:ml-5"
          >233 відгуки</span
        >
      </div>
    </div>

    <!-- Buttons block -->
    <div
      class="flex w-full flex-col space-y-3 md:max-w-[251px] md:flex-row md:items-center md:justify-center md:space-y-0"
    >
      <div class="custom-gradient-border">
        <a
          href="https://www.google.com.ua/?hl=uk"
          class="flex w-full justify-center rounded-[8px] border bg-gradient-to-r from-[#E6F7F5] to-[#F8FCFC] py-2 text-[14px] font-medium leading-[22px] text-gray-800 hover:from-[#3d8b86] hover:to-[#50c7bf] hover:text-white md:px-5 md:py-[10px]"
        >
          Переглянути
        </a>
      </div>
      <button
        @click="notify"
        class="rounded-[8px] bg-gradient-to-r from-[#3CB9A0] to-[#1786AC] py-2 text-[14px] font-medium leading-[22px] text-white hover:opacity-90 md:ml-[10px] md:px-5 md:py-[10px]"
      >
        Написати
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import StarRating from "vue-star-rating";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const rating = ref(4.5);

const notify = () => {
  toast("Hello world !", {
    autoClose: 1000,
  });
};
</script>

<style></style>
