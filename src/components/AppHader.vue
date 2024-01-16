<template>
<header>
    <div class="container mt-5">
        <nav>
            <ul>
                <li>
                    <img src="../img/ciao.jpeg" alt="logo">
                </li>
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
.container {
    margin-top: 5px;
}

nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none; 
    padding: 0; 
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
}

nav ul li {
    margin-right: 10px; 
}

nav ul li:first-child {
    margin-right: auto; 
}

img {
    width: 100px;
    border-radius: 10px;
}

a {
    text-decoration: none;
}


</style>