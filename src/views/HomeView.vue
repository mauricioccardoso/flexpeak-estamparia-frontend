<template>
  <div class="mt-2 is-flex is-justify-content-space-between">
    <h1 class="title is-4">
      Bem vindo
      <i class="fa-solid fa-heart"></i>
    </h1>
    <router-link :to="{ name: 'Cart' }">
      <button class="button is-primary">
        <strong class="mr-2">Carrinho</strong>
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </router-link>
  </div>

  <section class="is-flex is-flex-wrap-wrap is-justify-content-space-between">
    <div v-for="product in productData" :key="product.id">
      <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <ProductCard :productData="product" />
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import { productData } from "@/data/productData";
</script>

<style scoped>
.fa-heart {
  color: #00d1b2;
}
</style>
