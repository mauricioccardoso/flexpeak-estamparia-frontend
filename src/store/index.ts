import httpClient from "@/http";
import type { ICartItems } from "@/interfaces/ICartItems";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  cart: ICartItems[];
  user: Object | null;
  token: String | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    cart: [],
    user: null,
    // token: "123",
    token: sessionStorage.getItem("TOKEN"),
  },
  actions: {
    register: ({ commit }, user) => {
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
  },
  mutations: {
    addToCart(state, data: ICartItems) {
      state.cart.push(data);
    },
    deleteItem(state, index: number) {
      state.cart.splice(index, 1);
    },
    logout: (state) => {
      sessionStorage.clear();
      state.cart = [];
      state.user = null;
      state.token = null;
    },
    setUser: (state, data) => {
      state.user = data.user;
      state.token = data.token;
      sessionStorage.setItem("TOKEN", data.token);
      console.log(state.user);
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
