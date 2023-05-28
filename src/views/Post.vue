<template>
  <HeaderPage />

  <!-- START CONTENT -->
  <div class="post sm:container mx-auto px-5 mb-5">
    <div class="post-content max-w-screen-lg sm:mx-auto grid grid-cols-1 sm:mt-20">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci modi, assumenda consectetur
      est rem dignissimos minima eius. Nobis vero similique dolorem culpa impedit laboriosam non
      ipsa accusantium! Ratione, nesciunt hic. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Earum perferendis id ullam, sunt quasi quod eaque sed. Ut in ipsum ipsa soluta, culpa,
      reprehenderit illo hic, quaerat debitis autem at. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Explicabo, similique. Corrupti, illo alias obcaecati sint voluptatibus,
      labore cupiditate eaque totam maxime ut incidunt tempora omnis laborum explicabo eum inventore
      hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci modi, assumenda
      consectetur est rem dignissimos minima eius. Nobis vero similique dolorem culpa impedit
      laboriosam non ipsa accusantium! Ratione, nesciunt hic. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Earum perferendis id ullam, sunt quasi quod eaque sed. Ut in ipsum ipsa
      soluta, culpa, reprehenderit illo hic, quaerat debitis autem at. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Explicabo, similique. Corrupti, illo alias obcaecati sint
      voluptatibus, labore cupiditate eaque totam maxime ut incidunt tempora omnis laborum explicabo
      eum inventore hic.
    </div>
  </div>
  <!-- END CONTENT -->
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    HeaderPage: Header
  }
}
</script>

<style>
.post {
  font-size: 1.1rem;
  max-width: 700px;
  text-align: justify;
}
</style>
