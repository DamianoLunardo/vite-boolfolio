<template>
<div class="card border-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">{{ project.title }}</div>
  <div class="card-body">
    <h5 class="card-title" v-if="project.type"> {{ project.type.name }} </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>