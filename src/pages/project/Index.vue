<template>
<div>
    <div class="container">
        <h1>Project</h1>
    </div>
</div>
<div class="container">
    <div class="grid">
<div class="card project-card" v-for="project in projects" :key="project.id">
<h3>{{ project.title }}</h3>
</div>
    </div>
</div>
</template>

<script>
export default {
   data() {
    return {
        projects: []
    }
   }
}
</script>

<style lang="scss" scoped>
</style>