import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useCartStore = defineStore("cartStore", () => {
  const cartItems = ref(null);
  const cartIsOpen = ref(false);

  onMounted(() => {
    // could be native fetch, axios, or inertia router GET/POST
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          cartItems.value = JSON.parse(localStorage.getItem("cart"));
          resolve();
        }, 800);
      } catch (error) {
        reject(error);
      }
    });
  });

  const addToCart = async (item) => {
    // could be native fetch, axios, or inertia router POST/PATCH
    const mockInsert = setTimeout((resolve) => {
      if (!cartItems.value) {
        cartItems.value = { [item.id]: item };
      } else {
        cartItems.value[item.id] = item;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems.value));
      resolve();
    }, 800);

    return new Promise((resolve, reject) => {
      try {
        mockInsert(resolve);
      } catch (error) {
        reject(error);
      }
    });
  };

  // what other metrics does a cart need??

  return { cartItems, cartIsOpen, addToCart };
});
