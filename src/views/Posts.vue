<template>
  <!-- START CONTENT -->
  <div class="sm:container mx-auto">
    <div class="posts max-w-screen-lg mx-auto grid sp:grid-cols-1 sp:gap-4 md:grid-cols-2 md:gap-2">
      <Post :data-post="i" v-for="i in 8" :key="i" />
    </div>
  </div>
  <!-- END CONTENT -->
</template>

<script>
import Post from '../components/Post.vue'

export default {
  components: {
    Post
  }
}
</script>

<style scoped>
.posts {
  min-height: 77vh;
}
</style>
