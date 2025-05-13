<script setup lang="js">
import { onMounted, ref, watch, watchEffect } from 'vue';
import CartPageProvider from './components/CartPageProvider.vue';
import { useMenuStore } from './stores/useMenuStore';

const { fetchMenu } = useMenuStore();

const menu = ref(null);

onMounted(() => {
      try {
        setTimeout(() => {
            menu.value = fetchMenu();
        }, 800);
      } catch (error) {
        console.error(error);
      }
  });
</script>

<template>
  <CartPageProvider pageHeader="Menu">
    <template v-if="menu === null">Loading...</template>
    <template v-else>{{ menu }}</template>
  </CartPageProvider>
</template>
