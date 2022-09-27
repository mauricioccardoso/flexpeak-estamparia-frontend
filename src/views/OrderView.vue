<template>
  <h1 class="title is-4 my-2">Seus pedidos</h1>
  <router-link class="button is-primary" :to="{ name: 'Home' }">
    <i class="fa-solid fa-arrow-left mr-2"></i>
    <strong>Voltar</strong>
  </router-link>

  <OrderCard :orderInfo="orderInfo" />
</template>

<script setup lang="ts">
import OrderCard from "../components/OrderCard.vue";

const orderInfo = {
  name: "Maria",
  status: "Pedido Realizado",
  address: "Rua imaginação",
  phone: "(92) 99999-9999",
  create_at: "10/02/2022",
  delivery_date: "10/03/2022",
  items: [
    {
      name: "Camisa",
      quantity: 14,
    },
    {
      name: "Camisa",
      quantity: 14,
    },
    {
      name: "Camisa",
      quantity: 14,
    },
  ],
};
</script>
