<template>
  <h1 class="title is-4 my-2">Seu carrinho</h1>
  <div class="mt-2 is-flex is-justify-content-space-between">
    <router-link class="button is-primary" :to="{ name: 'Home' }">
      <i class="fa-solid fa-arrow-left mr-2"></i>
      <strong>Voltar</strong>
    </router-link>
    <button
      class="button is-primary"
      :disabled="orderDisabled"
      @click="createOrder"
    >
      <strong class="mr-3">Finalizar Pedido</strong>
      <i class="fa-solid fa-gifts"></i>
    </button>
  </div>

  <div v-for="product in products" :key="product.id">
    <CartCard :productsData="product" />
  </div>

  <div class="card py-6 mt-5 has-text-centered" v-if="orderDisabled">
    <h1 class="title is-2">Adicione itens ao carrinho</h1>
    <i class="fa-regular fa-face-smile-wink fa-4x"></i>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { onBeforeMount, onUpdated, ref } from "vue";
import { useRouter } from "vue-router";
import CartCard from "../components/CartCard.vue";

const store = useStore();
const router = useRouter();

let products = ref();
let orderDisabled = ref(true);

const orderDisabledFunction = () => {
  if (store.state.cart.length > 0) {
    orderDisabled.value = false;
  } else {
    orderDisabled.value = true;
  }
};

onBeforeMount(() => {
  products.value = store.state.cart;
  orderDisabledFunction();
});

onUpdated(() => {
  orderDisabledFunction();
});

const createOrder = () => {
  let order = {
    user_id: store.state.user?.id,
    items: products.value,
  };
  store.dispatch("createOrder", order).then(() => {
    router.push({
      name: "Home",
    });
  });
};
</script>

<style scoped></style>
