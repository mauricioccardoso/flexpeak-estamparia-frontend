<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <router-link :to="{ name: 'Home' }" @click="hideMenu">
              <h1 class="title is-3">Estamparia FlexPeak</h1>
            </router-link>
          </div>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="HamburgMenu"
            @click="showMenu"
            :class="{ 'is-active': HamburgActive }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="HamburgMenu"
          class="navbar-menu"
          :class="{ 'is-active': HamburgActive }"
        >
          <div class="navbar-start">
            <router-link
              class="navbar-item"
              :to="{ name: 'Home' }"
              @click="hideMenu"
            >
              <h1 class="title is-5">Home</h1>
            </router-link>
            <router-link
              class="navbar-item"
              :to="{ name: 'Cart' }"
              @click="hideMenu"
            >
              <h1 class="title is-5">Carrinho</h1>
            </router-link>
            <router-link
              class="navbar-item"
              :to="{ name: 'Orders' }"
              @click="hideMenu"
            >
              <h1 class="title is-5">Pedidos</h1>
            </router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-danger" @click="logout"> Logout </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

let HamburgActive = ref(false);

const showMenu = () => {
  HamburgActive.value = !HamburgActive.value;
};
const hideMenu = () => {
  HamburgActive.value = false;
};

const logout = () => {
  store.commit("logout");
  router.push({
    name: "Login",
  });
};
</script>

<style scoped>
.navbar-start .navbar-item:hover {
  background-color: #00d1b2;
}
</style>
