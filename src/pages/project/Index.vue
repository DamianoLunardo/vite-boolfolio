<template>
    <div class="container">
        <div>
            <h1>Project</h1>
        </div>
    </div>
    <div class="container">
        <div class="card-project row  justify-content-center gap-3 ">
            <ProjectCard class="card project-card" v-for="project in projects" :project="project" :key="project.id" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },

    data() {
        return {
            projects: [],
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchProjects() {
            axios.get(`${this.BASE_URL}/projects`)
                .then((response) => {
                    this.projects = response.data.results.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
    created() {
        this.fetchProjects()
    }
}
</script>

<style lang="scss" scoped></style>