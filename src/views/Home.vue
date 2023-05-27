<template>
  <!-- START HEADER -->
  <HeaderPage />
  <!-- END HEADER -->

  <!-- START CONTENT -->
  <div class="sm:container mx-auto">
    <div
      class="max-w-screen-lg mx-auto grid lg:grid-cols-2 sm:mt-40 sm:grid-cols-1 gap-4"
      v-for="i in 4"
      :key="i"
    >
      <Post />
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
