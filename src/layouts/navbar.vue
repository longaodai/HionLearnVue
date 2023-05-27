<template>
  <nav class="sticky top-0 z-10 sm:container mx-auto px-5 bg-white">
    <div
      class="max-w-screen-lg mx-auto w-full flex flex-row h-24 p-1 justify-between sm:static sp:relative"
    >
      <div>
        <a href="#">
          <img src="../assets/images/logo.png" alt="" class="w-20 h-20" />
        </a>
      </div>
      <div class="sp:flex sm:hidden items-center sp:text-lg">
        <button @click="toogleMenu()"><font-awesome-icon icon="fa-solid fa-bars" /></button>
      </div>
      <div v-if="isShowMenu" class="sm:static sp:absolute w-full sp:top-24 bg-white">
        <ul
          class="sp:flex sm:flex-row sp:justify-center sp:text-center sp:flex-col h-full leading-20 sm:space-x-10 font-bold cursor-pointer"
        >
          <li class="sp:px-7">Trang chủ</li>
          <li class="sp:px-7">Giới thiệu</li>
          <li class="sp:px-7">Bài viết</li>
          <li class="sp:px-7">Liên hệ</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let isShowMenu = ref(false)
    let currentYear = new Date().getFullYear()

    const toogleMenu = () => {
      isShowMenu.value = !isShowMenu.value
    }

    return { isShowMenu, toogleMenu, currentYear }
  }
}
</script>
