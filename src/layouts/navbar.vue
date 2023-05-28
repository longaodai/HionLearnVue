<template>
  <nav class="sticky top-0 z-10">
    <div class="md:container mx-auto px-5 bg-white">
      <div
        class="max-w-screen-lg mx-auto w-full flex flex-row h-24 p-1 justify-between md:static sp:relative"
      >
        <div>
          <router-link to="/">
            <img src="../assets/images/logo.png" alt="" class="w-20 h-20" />
          </router-link>
        </div>
        <div class="sp:flex md:hidden items-center sp:text-lg">
          <button @click="toogleMenu()"><font-awesome-icon icon="fa-solid fa-bars" /></button>
        </div>
        <div v-if="isShowMenu" class="md:static sp:absolute w-full sp:top-24 bg-white">
          <ul
            class="sp:flex sp:justify-center sp:text-center sp:flex-col h-full leading-20 md:flex-row md:justify-end md:space-x-10 font-bold cursor-pointer"
          >
            <li class="sp:px-7" @click="onShowMenu">
              <router-link to="/">Trang chủ</router-link>
            </li>
            <li class="sp:px-7" @click="onShowMenu">Giới thiệu</li>
            <li class="sp:px-7" @click="onShowMenu">
              <router-link to="/posts">Bài viết</router-link>
            </li>
            <li class="sp:px-7" @click="onShowMenu">Liên hệ</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    let isShowMenu = ref(false)
    const windowWidth = ref(window.innerWidth)
    let currentYear = new Date().getFullYear()

    const toogleMenu = () => {
      isShowMenu.value = !isShowMenu.value
    }

    if (windowWidth.value >= 768) {
      isShowMenu.value = true
    }

    const onShowMenu = () => {
      if (windowWidth.value >= 768) {
        isShowMenu.value = true
      } else {
        isShowMenu.value = false
      }
    }

    return { isShowMenu, toogleMenu, currentYear, onShowMenu }
  }
}
</script>

<style>
nav {
  box-shadow: 0 0 3px 0px #7c7c7cb5;
}
</style>
