<script>
import ProjectIndex from './pages/project/Index.vue';
export default {
  components: {
    ProjectIndex,
  },
  data() {
    return {
      projects: []
    }
  }
}
</script>

<template>

<ProjectIndex />

</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
