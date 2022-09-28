<template>
  <div class="container mb-6">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped>
.container {
  padding: 0 2rem;
}
</style>
