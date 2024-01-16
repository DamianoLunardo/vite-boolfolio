<template>
<header>
    <div class="container">
        <nav>
            <ul>
               <li>
                <!-- <a href="/">Home</a> -->
                <RouterLink :to="{name: 'home'}">Home</RouterLink>
               </li>
               <li>
                <!-- <a href="/projects">Projects</a> -->
                <RouterLink :to="{name: 'projects.index'}">Projects</RouterLink>
               </li> 
               <li>
                <!-- <a href="/contacts">Contacts</a> -->
                <RouterLink :to="{name: 'contacts'}">Contacts</RouterLink></li>
            </ul>
        </nav>
    </div>
</header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
</style>