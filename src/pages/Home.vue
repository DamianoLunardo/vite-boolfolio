<template>
    <div class="container d-flex">
        <div class="left">
            <div class="pt-3 pb-5 scroll-animation">
                <div class="font-text1">
                Hello,    
                </div>
                <div class="font-text2">
                I'm <span class="text-primary">{{ title }} </span>    
                </div>
                <div class="font-text2">
                {{ jobTitle }}     
                </div>
            </div>
            <div class="my-stack">
                <div class="icons-logo d-flex gap-3">
                    <img class="logo-img" src="../img/html-5.svg" alt="html">
                    <img class="logo-img" src="../img/css3-original-wordmark.svg" alt="css">
                    <img class="logo-img" src="../img/javascript.svg" alt="js">
                    <img class="logo-img" src="../img/file-type-sass.svg" alt="sass">
                    <img class="logo-img" src="../img/bootstrap.svg" alt="bootstrap">
                    <img class="logo-img" src="../img/brand-vite.svg" alt="vite">
                    <img class="logo-img" src="../img/vue.svg" alt="vue">
                    <img class="logo-img" src="../img/file-type-php.svg" alt="php">
                    <img class="logo-img" src="../img/laravel.svg" alt="laravel">
               </div> 
            </div>
        </div>
        <!-- <div class="right">
            <img class="dami-img" src="../img/ciao.jpeg" alt="logo">
        </div> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Damiano',
            jobTitle: 'Web Developer',
        }
    }
}
</script>

<style lang="scss" scoped>


.left {
    flex: 2;
    display: flex;
    flex-direction: column;
}

.right {
    flex: 1; 
}

.logo-img {
   width: 40px;
}

.dami-img {
    width: 200px;
    border-radius: 50%;
}

.container {
    height: 100vh;
    align-items: center;
}

.font-text1 {
    font-size: 30px;
    font-weight: bold;
    color: gray;
}

.font-text2 {
    font-size: 60px;
    font-weight: bold;
}

.text-primary {
    color: rgb(0, 128, 255);
    font-weight: bold;
}


@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes changeColor {
    0% {
        color: gray;
    }
    50% {
        color: #ff7f50;
    }
    100% {
        color: gray;
    }
}

.scroll-animation {
    animation: slideIn 1s ease-out;
}

.font-text1, .font-text2, .text-primary {
    animation: changeColor 5s infinite; 
}

</style>
