<template>
  <router-link class="button is-primary mt-2" :to="{ name: 'Home' }">
    <i class="fa-solid fa-arrow-left mr-2"></i>
    <strong>Voltar</strong>
  </router-link>
  <div class="card p-6 mt-4">
    <div class="columns">
      <div class="column">
        <ProductCard :productData="product" />
      </div>
      <div class="column">
        <div
          class="card p-5 card__quantity has-text-centered is-flex is-flex-direction-column is-justify-content-space-between"
        >
          <h1 class="title is-4">Escolha a quantidade desejada</h1>

          <div class="is-flex is-justify-content-center">
            <div class="quantity_input is-flex is-justify-content-center">
              <button class="button is-primary" @click="decrement">
                <i class="fa-solid fa-minus"></i>
              </button>
              <input
                class="input has-text-centered mx-2"
                type="number"
                min="0"
                v-model="quantity"
              />
              <button class="button is-primary" @click="increment">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <button
            class="button is-primary is-medium mt-2"
            @click="addToCart"
            :disabled="quantity <= 0"
          >
            <strong class="mr-4">Adicionar no Carrinho</strong>
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { productData } from "@/data/productData";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import type { IProductData } from "@/interfaces/IProductData";

const store = useStore();
const router = useRouter();

const props = defineProps({
  id: {
    type: String,
  },
});

let product: IProductData;

if (props.id) {
  let productD = productData.find((product) => product.id == props.id);
  product = productD as IProductData;
}

const quantity = ref(0);
const increment = () => {
  if (quantity.value < 0) {
    quantity.value = 0;
  }
  quantity.value++;
};
const decrement = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};

const addToCart = () => {
  store.commit("addToCart", {
    id: product.id,
    name: product.name,
    category: product.category,
    url: product.url,
    quantity: quantity.value,
  });
  router.push({ name: "Home" });
};
</script>

<style scoped>
.card__quantity {
  height: 100%;
}

.quantity_input {
  max-width: 60%;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
