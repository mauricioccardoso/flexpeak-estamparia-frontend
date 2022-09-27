import type { ICartItems } from "@/interfaces/ICartItems";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  cart: ICartItems[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, data: ICartItems) {
      state.cart.push(data);
    },
    deleteItem(state, index: number) {
      state.cart.splice(index, 1);
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
