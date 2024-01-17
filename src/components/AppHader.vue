<template>
<header>
    <div class="container mt-5">
        <nav>
            <ul>
                <!-- <li>
                    <img src="../img/ciao.jpeg" alt="logo">
                </li> -->
               <li>
                <!-- <a href="/">Home</a> -->
                <RouterLink class="nav-link"  :to="{name: 'home'}">Home <span></span></RouterLink>
               </li>
               <li>
                <!-- <a href="/projects">Projects</a> -->
                <RouterLink class="nav-link"  :to="{name: 'projects.index'}">Projects <span></span></RouterLink>
               </li> 
               <li>
                <!-- <a href="/contacts">Contacts</a> -->
                <RouterLink class="nav-link" :to="{name: 'contacts'}">Contacts <span></span></RouterLink></li>
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
nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none; 
    padding: 0; 
    font-size: 15px;
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

.nav-link {
  position: relative;
  font-size: 1.1em;
  text-decoration: none;
  padding: 6px 10px;
  transition: 0.5s;
}

.nav-link:hover {
  color: rgb(0, 128, 255);
  font-size: 20px;
}

.nav-link span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-bottom: 2px solid rgb(0, 128, 255);
  border-radius: 15px;
  transform: scale(0) translateY(50px);
  opacity: 0;
  transition: 0.5s;
}

.nav-link:hover span {
  transform: scale(1) translateY(0);
  opacity: 1;
}

</style>