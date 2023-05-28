<template>
  <div class="container mx-auto align-middle">
    <div class="w-full h-36 flex justify-center items-center">
      <router-link :to="{ name: 'posts' }">
        <button class="w-44 h-12 rounded-full bg-slate-100 hover:bg-slate-200 font-bold">
          Xem thêm
        </button>
      </router-link>
    </div>
  </div>
</template>
