<script setup lang="js">
import { XIcon } from 'lucide-vue-next';
</script>

<template>
  <div
    class="fixed inset-y-0 right-0 h-full w-full max-w-md bg-neutral-100 flex flex-col"
  >
    <div class="px-6 py-7 grow flex flex-col">
      <div class="flex items-start justify-between">
        <h2
          class="text-2xl font-medium leading-none uppercase text-neutral-400 mb-4"
        >
          Cart
        </h2>
        <button @click="$emit('closeCart')">
          <XIcon class="size-7 text-neutral-400"></XIcon>
        </button>
      </div>
      <div class="grow overflow-y-auto"></div>
    </div>
    <div class="w-full px-6 pt-7 pb-5 flex bg-neutral-200 flex-col gap-y-4">
      <div class="flex justify-between">
        <p class="text-sm">Subtotal</p>
      </div>
      <div class="flex justify-between">
        <p class="text-sm">Tax</p>
      </div>
      <div class="flex justify-between">
        <p class="font-medium text-lg">Total</p>
      </div>
      <button
        class="w-full bg-rose-500 hover:bg-rose-400 active:bg-rose-600 py-3 text-neutral-50 rounded"
      >
        Checkout
      </button>
    </div>
  </div>
</template>
