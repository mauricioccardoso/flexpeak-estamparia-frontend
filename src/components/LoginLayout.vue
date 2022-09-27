<template>
  <div class="card p-4">
    <div class="has-text-centered">
      <h1 class="title">Login</h1>
      Ou
      <router-link :to="{ name: 'Register' }">
        <strong>Registre-se</strong>
      </router-link>
    </div>

    <form @submit.prevent="login">
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="email"
            placeholder="example@mail.com"
            v-model="user.email"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <!-- <p class="help is-danger">This email is invalid</p> -->
      </div>
      <div class="field">
        <label class="label">Senha</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="password"
            v-model="user.password"
            required
          />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-lock"></i>
          </span>
        </div>
      </div>
      <button type="submit" class="button is-primary is-pulled-right">
        Entrar
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const user = {
  email: "",
  password: "",
};

const login = () => {
  console.log(user);
};
</script>

<style scoped>
.card {
  width: 500px;
}
</style>
