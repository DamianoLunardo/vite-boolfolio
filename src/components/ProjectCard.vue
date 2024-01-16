<template>
<div class="card mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <h6 class="card-subtitle mb-2 text-muted" v-if="project.type">Type: {{ project.type.name }}</h6>
    <p class="card-text">MORE TEXT</p>
    <router-link :to="{name: 'projects.show', params: {slug: project.slug}}" class="btn btn-primary">Watch Project</router-link>
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


.card-title-project {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>