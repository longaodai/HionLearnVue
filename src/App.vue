<template>
  <component :is="componentName">
    <RouterView />
  </component>
</template>

<script>
import defaultLayout from './layouts/default.vue'

export default {
  setup() {
    const componentName = defaultLayout

    return { componentName }
  }
}
</script>
