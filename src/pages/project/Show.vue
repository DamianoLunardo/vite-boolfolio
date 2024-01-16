<template>
<div v-if="project">
    <div class="container">
        <h1>{{ project.title }}</h1>
        <p> {{ project.slug }} </p>
        <p> {{ project.type?.name }}</p>
        <ul>
            <li class="technologies" v-for="technology in project.technologies" :key="technology.id">
            {{ technology.name }}</li>
        </ul>
    </div>
    <div class="container" v-html="project.content">
    </div>
</div>
</template>
    
<script>
import axios from 'axios'
    export default {
      props:['slug'],
      data(){
          return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api',
          }
      },
      methods: {
        fetchProject (){
            axios.get(`${this.BASE_URL}/projects/${this.slug}`)
            .then(res => {
                this.project = res.data.project
            }).catch((error) => {

                if(error.response.status === 404) {
                    this.$router.push({name: 'not-found'})
                }
            })
        }
      },
      created () {
        this.fetchProject()
      }
    }
</script>
    
<style lang="scss" scoped>
.technologies {
    list-style: none;
    display: inline;
    margin-right: 10px;
    font-size: 13px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>