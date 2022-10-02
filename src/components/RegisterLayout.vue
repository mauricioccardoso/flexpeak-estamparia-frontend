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
          <input class="input" type="text" v-model="user.name" required />
        </div>
        <p class="help is-danger" v-if="msgs?.name">
          Nome deve conter 3 ou mais caracteres!
        </p>
      </div>
      <div class="field">
        <label class="label">Endereço</label>
        <div class="control">
          <input class="input" type="text" v-model="user.address" required />
        </div>
        <p class="help is-danger" v-if="msgs?.address">
          Endereço deve conter 5 ou mais caracteres!
        </p>
      </div>
      <div class="field">
        <label class="label">Contato</label>
        <div class="control">
          <input
            class="input"
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            v-model="user.phone"
            required
          />
          <p class="help is-danger" v-if="msgs?.phone">
            Contato deve conter o ddd e o número!
          </p>
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
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <p class="help is-danger" v-if="msgs?.email">Email inválido</p>
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

        <p class="help is-danger" v-if="msgs?.email">
          Senha inválida. A Senha deve ter no mínimo 8 caracteres.
        </p>
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
            required
          />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-lock"></i>
          </span>
        </div>
        <p class="help is-danger" v-if="msgPassConfirme">
          Senhas devem ser idênticas!
        </p>
      </div>

      <button type="submit" class="button is-primary is-pulled-right">
        Criar conta
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { ref } from "vue";
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

let msgs = ref();
let msgPassConfirme = ref(false);

const register = () => {
  store.dispatch("register", user).then((errors) => {
    if (errors) {
      msgs.value = errors;
      confirmation();
      return;
    }

    router.push({
      name: "Home",
    });
  });
};

const confirmation = () => {
  if (msgs.value.password[0].includes("password confirmation")) {
    msgPassConfirme.value = true;
  } else {
    msgPassConfirme.value = false;
  }
};
</script>

<style scoped>
.card {
  width: 500px;
}
</style>
