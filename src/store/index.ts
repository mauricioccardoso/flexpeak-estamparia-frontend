import httpClient from "@/http";
import type { ICartItems } from "@/interfaces/ICartItems";
import type { InjectionKey } from "vue";
import type { IUser } from "@/interfaces/IUser";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  cart: ICartItems[];
  userData: [];
  user: IUser | null;
  token: String | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    cart: [],
    userData: [],

    user: JSON.parse(sessionStorage.getItem("USER")),

    token: sessionStorage.getItem("TOKEN"),
  },
  actions: {
    register({ commit }, user) {
      return httpClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return httpClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    createOrder({ commit }, data) {
      httpClient.post("/orders", data).then(() => {
        commit("resetCart");
      });
    },

    getUserData({ commit }) {
      return httpClient.get("/orders").then(({ data }) => {
        commit("setUserDara", data);
        return data;
      });
    },
  },
  mutations: {
    addToCart(state, data: ICartItems) {
      state.cart.push(data);
    },
    resetCart(state) {
      state.cart = [];
    },
    deleteItem(state, index: number) {
      state.cart.splice(index, 1);
    },
    logout(state) {
      sessionStorage.clear();
      state.cart = [];
      state.user = null;
      state.token = null;
    },
    setUser(state, data) {
      state.user = data.user;
      state.token = data.token;
      sessionStorage.setItem("TOKEN", data.token);
      sessionStorage.setItem("USER", JSON.stringify(data.user));
    },
    setUserDara(state, data) {
      state.userData = data;
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
