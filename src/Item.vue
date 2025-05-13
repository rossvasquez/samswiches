<script setup lang="js">
import CartPageProvider from './components/CartPageProvider.vue';
</script>

<template>
  <CartPageProvider :pageHeader="`Item ${$route.params.id}`"></CartPageProvider>
</template>
