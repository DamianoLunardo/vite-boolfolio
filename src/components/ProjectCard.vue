<template>
<div class="card border-warning mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <div class="card-title-project">{{ project.title }}</div>
    <h5  v-if="project.type">Type: {{ project.type.name }} </h5>
    <p class="card-text">MORE TEXT</p>
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