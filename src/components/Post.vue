<template>
  <router-link :to="{ name: 'post', params: { id: dataPost } }">
    <div
      class="flex sm:flex-row sp:flex-col justify-center items-center my-5 sp:text-center sm:text-start"
    >
      <div class="w-[200px] h-[200px]">
        <img src="../assets/images/banner.jpeg" alt="" class="w-full h-full rounded-full" />
      </div>
      <div class="w-1/2 flex flex-col ml-4">
        <h4 class="font-bold text-2xl">
          Time text to so legs screen step experiments term a {{ dataPost }}
        </h4>
        <p>
          The due be to warp room he have place a problem offer, of just of screen there sitting.
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    dataPost: Number
  },
  setup() {}
}
</script>
