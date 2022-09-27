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
              Home
            </router-link>
            <router-link
              class="navbar-item"
              :to="{ name: 'Cart' }"
              @click="hideMenu"
            >
              Carrinho
            </router-link>
            <router-link
              class="navbar-item"
              :to="{ name: 'Orders' }"
              @click="hideMenu"
            >
              Pedidos
            </router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light"> Log in </a>
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

let HamburgActive = ref(false);

const showMenu = () => {
  HamburgActive.value = !HamburgActive.value;
};
const hideMenu = () => {
  HamburgActive.value = false;
};
</script>
