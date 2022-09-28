<template>
  <h1 class="title is-4 my-2">Seus pedidos</h1>
  <router-link class="button is-primary" :to="{ name: 'Home' }">
    <i class="fa-solid fa-arrow-left mr-2"></i>
    <strong>Voltar</strong>
  </router-link>

  <div v-for="order in orderData" :key="order.id">
    <OrderCard :orderInfo="order" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { onMounted, ref } from "vue";
import OrderCard from "../components/OrderCard.vue";

const store = useStore();

let orderData = ref();

onMounted(() => {
  store.dispatch("getUserData").then((data) => {
    orderData.value = data;
  });
});
</script>
