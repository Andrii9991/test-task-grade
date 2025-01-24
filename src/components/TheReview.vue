\
<template>
  <div
    class="flex flex-col items-center w-[328px] p-[30px] border rounded-lg shadow-lg mx-auto bg-white"
  >
    <!-- Header Block -->
    <div class="flex w-full mb-5">
      <img
        src="../assets/images/google.svg"
        alt="Google logo"
        class="w-10 h-10 object-contain my-[6px]"
      />
      <h1 class="text-lg leading-[26px] ml-5 font-medium">
        Відгуки наші <br />
        клієнтів у Google
      </h1>
    </div>

    <!-- Main block -->
    <div class="flex flex-col justify-center items-start w-full mb-5">
      <div class="flex space-x-1 mr-2 mb-[6px]">
        <span class="text-2xl font-medium text-gray-800 mr-5">{{
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

      <span class="text-sm text-gray-600 font-normal">233 відгуки</span>
    </div>

    <!-- Buttons block -->
    <div class="flex flex-col space-y-3 w-full">
      <div class="custom-gradient-border">
        <a
          href="https://www.google.com.ua/?hl=uk"
          class="w-full flex justify-center py-2 rounded-[8px] text-[14px] font-medium bg-gradient-to-r from-[#E6F7F5] border to-[#F8FCFC] text-gray-800 hover:opacity-90"
        >
          Переглянути
        </a>
      </div>
      <button
        @click="notify"
        class="py-2 rounded-[8px] text-white bg-gradient-to-r from-[#3CB9A0] to-[#1786AC] hover:opacity-90"
      >
        Натискати
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StarRating from 'vue-star-rating';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const rating = ref(4.5);

const notify = () => {
      toast("Hello world !", {
        autoClose: 1000,
      });
    }
</script>

<style></style>
