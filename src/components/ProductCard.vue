<template>
  <div class="card has-text-centered p-5 my-1">
    <h1 class="title is-4">{{ productData?.name }}</h1>
    <figure class="image is-128x128 is-inline-block">
      <img :src="productData?.url" />
    </figure>
    <p class="my-2">Preço: $$</p>

    <span class="tag">{{ props.productData?.category }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  productData: {
    type: Object,
  },
});
</script>

<style scoped>
.card:hover {
  background-color: #e0e0e046;
}
</style>
