import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HeaderLayout from "@/components/HeaderLayout.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import OrderView from "@/views/OrderView.vue";
import AuthView from "@/views/AuthView.vue";
import LoginLayout from "@/components/LoginLayout.vue";
import RegisterLayout from "@/components/RegisterLayout.vue";
import { store } from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: HeaderLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/home",
          name: "Home",
          component: HomeView,
        },
        {
          path: "/carrinho",
          name: "Cart",
          component: CartView,
        },
        {
          path: "/produto/:id",
          name: "Product",
          component: ProductView,
          props: true,
        },
        {
          path: "/pedidos",
          name: "Orders",
          component: OrderView,
          props: true,
        },
      ],
    },
    {
      path: "/auth",
      redirect: "/login",
      component: AuthView,
      meta: { isGuest: true },
      children: [
        {
          path: "/login",
          name: "Login",
          component: LoginLayout,
        },
        {
          path: "/register",
          name: "Register",
          component: RegisterLayout,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.token) {
    next({ name: "Login" });
  } else if (store.state.token && to.meta.isGuest) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
