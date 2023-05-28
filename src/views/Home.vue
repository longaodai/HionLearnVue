<template>
  <!-- START HEADER -->
  <HeaderPage />
  <!-- END HEADER -->

  <!-- START CONTENT -->
  <div class="sm:container mx-auto">
    <div
      class="max-w-screen-lg mx-auto grid sm:mt-20 sp:grid-cols-1 sp:gap-4 md:grid-cols-2 md:gap-2"
    >
      <Post :data-post="i" v-for="i in 4" :key="i" />
    </div>
  </div>
  <!-- END CONTENT -->

  <DefaultButton />
</template>

<script>
import Post from '../components/Post.vue'
import Header from '../components/Header.vue'
import DefaultButton from '../components/utils/buttons/Default.vue'

export default {
  components: {
    Post,
    DefaultButton,
    HeaderPage: Header
  }
}
</script>
