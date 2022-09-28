<template>
  <div class="card mt-5 mb-2 p-4">
    <div class="columns">
      <div class="column">
        <h1>
          Nome: <strong>{{ user?.name }}</strong>
        </h1>
      </div>

      <div class="column">
        Contato: <strong>{{ user?.phone }}</strong>
      </div>
      <div class="column">
        Status: <strong>{{ orderInfo?.order_status }}</strong>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        Endereço: <strong>{{ user?.address }}</strong>
      </div>
      <div class="column">
        Entrega: <strong>{{ orderInfo?.delivery_date }}</strong>
      </div>
      <div class="column">
        Data:
        <strong class="mr-1">
          {{ new Date(orderInfo?.created_at).toLocaleTimeString("pt-BR") }}
        </strong>
        <strong>-</strong>
        <strong class="ml-1">
          {{ new Date(orderInfo?.created_at).toLocaleDateString("pt-BR") }}
        </strong>
      </div>
    </div>
    <hr />

    <!-- loop -->
    <div v-for="(item, index) in orderInfo?.items" :key="index">
      <div class="is-flex is-justify-content-space-around">
        <div class="">{{ item.name }}</div>
        <div class="">{{ item.quantity }}</div>
      </div>
    </div>
    <!-- loop-end -->
  </div>
</template>

<script setup lang="ts">
import { store } from "@/store";

const props = defineProps({
  orderInfo: {
    type: Object,
  },
});

const user = store.state.user;
</script>

<style scoped>
.card {
  background-color: #00d1b2;
}
</style>
