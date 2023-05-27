<template>
  <!-- START NAVIGATION -->
  <Navbar />
  <!-- END NAVIGATION -->

  <!-- CONTENT -->
  <slot />
  <!-- END CONTENT -->

  <!-- START FOOTER -->
  <Footer />
  <!-- END FOOTER -->
</template>

<script>
import Navbar from './navbar.vue'
import Footer from './footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
