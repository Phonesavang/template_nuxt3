<script setup lang="ts">
definePageMeta({
  layout: false,
});
defineProps(["error"]);
</script>
<template>
  <section
    style="height: 100vh; width: 100%; color: #2b2b2b"
    class="d-flex justify-center align-center text-center"
  >
    <div>
      <h1 class="text-h1 font-weight-bold">{{ error?.statusCode }}</h1>
      <h2 class="text-h4 my-2">{{ error?.message }}</h2>
      <p class="text-h6">The page you were looking for does not exist</p>
      <v-btn
        color="error"
        elevation="0"
        class="mt-6"
        to="/"
        rounded="xl"
        size="large"
        >Go to home</v-btn
      >
    </div>
  </section>
</template>
