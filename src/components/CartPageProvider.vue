<script setup lang="js">
import { useCartStore } from "../stores/useCartStore";
import Header from "./Header.vue";
import Cart from "./Cart.vue";
import { ref } from "vue";

const { cartItems, cartIsOpen, addToCart } = useCartStore();

const isOpen = ref(false);

defineProps({
  pageHeader: {
    type: String,
    default: "New Page",
  },
})
</script>

<template>
  <div class="min-h-screen relative w-full bg-neutral-50">
    <Header @toggleCart="isOpen = !isOpen"></Header>
    <main class="w-full px-6 py-7 max-w-5xl mx-auto">
      <h1 class="text-2xl font-medium uppercase text-neutral-300 mb-4">
        {{ pageHeader }}
      </h1>
      <slot></slot>
    </main>
    <Transition name="backdrop">
      <div
        @click="isOpen = false"
        class="outer fixed inset-0 bg-neutral-800/50 flex justify-end"
        v-if="isOpen"
      ></div>
    </Transition>
    <Transition name="cart">
      <Cart v-if="isOpen" @closeCart="isOpen = false"></Cart>
    </Transition>
  </div>
</template>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 200ms ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.cart-enter-active,
.cart-leave-active {
  transition: transform 450ms ease;
}

.cart-enter-from,
.cart-leave-to {
  transform: translateX(100%);
}
</style>
