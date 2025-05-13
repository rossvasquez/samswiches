<script setup lang="js">
import { Sandwich, ShoppingCartIcon } from 'lucide-vue-next';
</script>

<template>
  <div
    class="w-full h-20 bg-neutral-100 flex shadow-md px-6 justify-between items-center"
  >
    <div class="flex items-center gap-x-2">
      <p class="text-xl uppercase font-medium text-neutral-400">Samswiches</p>
      <Sandwich class="size-8 text-rose-500"></Sandwich>
    </div>
    <button @click="$emit('toggleCart')">
      <ShoppingCartIcon class="size-8 text-neutral-400 pr-2"></ShoppingCartIcon>
    </button>
  </div>
</template>
