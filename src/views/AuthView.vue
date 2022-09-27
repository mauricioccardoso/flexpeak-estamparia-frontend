<template>
  <div class="container__centered">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container__centered {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
