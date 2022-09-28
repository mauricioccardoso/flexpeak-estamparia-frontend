<template>
  <h1 class="title is-4 my-2">Seus pedidos</h1>
  <router-link class="button is-primary" :to="{ name: 'Home' }">
    <i class="fa-solid fa-arrow-left mr-2"></i>
    <strong>Voltar</strong>
  </router-link>

  <div v-for="order in orderData" :key="order.id">
    <OrderCard :orderInfo="order" />
  </div>

  <div class="card py-6 mt-5 has-text-centered" v-if="noOrderCard">
    <h1 class="title is-2">Você ainda não realizou nenhum pedido</h1>
    <router-link class="button is-primary" :to="{ name: 'Home' }">
      <strong class="mr-2"> Ver a lojar </strong>
      <i class="fa-solid fa-store"></i>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { onMounted, ref } from "vue";
import OrderCard from "../components/OrderCard.vue";

const store = useStore();

let orderData = ref();

let noOrderCard = ref(true);

onMounted(() => {
  store.dispatch("getUserData").then((data) => {
    orderData.value = data;
    if (store.state.userData.length > 0) {
      noOrderCard.value = false;
    } else {
      noOrderCard.value = true;
    }
  });
});
</script>
