<template>
  <div class="card p-4">
    <div class="has-text-centered">
      <h1 class="title">Crie sua conta</h1>
      Ou fazer
      <router-link :to="{ name: 'Login' }">
        <strong>Login</strong>
      </router-link>
    </div>

    <form @submit.prevent="register">
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input class="input" type="text" v-model="user.name" />
        </div>
      </div>
      <div class="field">
        <label class="label">Endereço</label>
        <div class="control">
          <input class="input" type="text" v-model="user.address" />
        </div>
      </div>
      <div class="field">
        <label class="label">Contato</label>
        <div class="control">
          <input
            class="input"
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            v-model="user.phone"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="email"
            placeholder="example@mail.com"
            v-model="user.email"
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
          <input class="input" type="password" v-model="user.password" />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-lock"></i>
          </span>
        </div>
        <p class="help is-info">
          <i class="fa-solid fa-circle-exclamation"></i>
          Letras maiúsculas, minúsculas, caracteres especiais e número.
        </p>
      </div>
      <div class="field">
        <label class="label">Confirme sua senha</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="password"
            v-model="user.password_confirmation"
          />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-lock"></i>
          </span>
        </div>
      </div>

      <!-- button -->
      <button type="submit" class="button is-primary is-pulled-right">
        Criar conta
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
  name: "",
  address: "",
  phone: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const register = () => {
  store
    .dispatch("register", user)
    .then(() => {
      router.push({
        name: "Home",
      });
    })
    .catch(() => {});
};
</script>

<style scoped>
.card {
  width: 500px;
}
</style>
