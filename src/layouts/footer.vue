<template>
  <div class="w-full mx-auto p-4">
    <div
      class="max-w-screen-lg mx-auto flex sm:flex-row sp:flex-col sp:justify-center sp:text-center sm:justify-between sp:text-sm"
    >
      <div class="flex sp:justify-center">
        <a href="#">
          <img src="../assets/images/logo.png" alt="" class="w-20 h-20" />
        </a>
      </div>

      <div>
        <ul class="flex flex-row leading-20 space-x-10 font-bold sp:justify-center">
          <li>
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </li>
          <li><font-awesome-icon icon="fa-brands fa-google" /></li>
          <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
        </ul>
      </div>
      <div class="sm:hidden">
        <p class="font-bold mt-1">{{ currentYear }} Ohion Blog - All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let currentYear = new Date().getFullYear()

    return { currentYear }
  }
}
</script>
