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
            v-focus
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
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
        <p class="help is-danger" v-if="msg">Email e/ou senha inválidos</p>
      </div>
      <button type="submit" class="button is-primary is-pulled-right">
        Entrar
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

const vFocus = {
  mounted: (el: any) => el.focus(),
};

const user = ref({
  email: "",
  password: "",
});

let msg = ref(false);

const login = () => {
  store.dispatch("login", user.value).then((error) => {
    if (error) {
      msg.value = true;
      user.value.password = "";
      return;
    }

    router.push({
      name: "Home",
    });
  });
};
</script>

<style scoped>
.card {
  width: 500px;
}
</style>
