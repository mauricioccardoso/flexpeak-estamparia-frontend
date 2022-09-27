<template>
  <div class="card mt-5 mb-2 p-4">
    <div class="columns level">
      <div class="column">
        <figure class="image is-64x64 is-inline-block">
          <img :src="productsData?.url" />
        </figure>
      </div>
      <div class="column">
        <strong>{{ props.productsData?.name }}</strong>
      </div>
      <div class="column">
        <p>
          Quantidade:
          <strong>{{ productsData?.quantity }}</strong>
        </p>
      </div>
      <div class="column">Categoria: {{ productsData?.category }}</div>
      <div class="column">
        <button
          type="button"
          class="button is-danger is-pulled-right"
          @click="deleteItem"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "@/store";

const props = defineProps({
  productsData: {
    type: Object,
  },
});

const deleteItem = () => {
  store.state.cart.forEach((item, index) => {
    if (item.id == props.productsData?.id) {
      store.commit("deleteItem", index);
    }
  });
};
</script>
