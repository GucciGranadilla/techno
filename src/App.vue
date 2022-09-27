<template>
<nav>
<button>
    <span class="span1"></span>
    <span class="span1"></span>
    <span class="span1"></span>
</button>
<!-- <div>
    <h1>Apo11o</h1>
</div> -->
<div id="menu">
    <button class="menu-button">
    <h1>Back</h1>
</button>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'podcasts'}">Podcasts</router-link>
    <div  class="menu-radio"><div class="circle"></div><router-link :to="{name: 'live'}">Live</router-link></div>
</div>
</nav>
<main class="page">
<Suspense>
<template #default>
<router-view v-slot="{ Component, route }">
    <transition :enter-active-class="route.meta.enterClass"
                :leave-active-class="route.meta.leaveClass"
                name="fade" mode="out-in">
        <component :is="Component" />
    </transition>
</router-view>
</template>
<template #fallback>
    <div class="fallback">LOADING..</div>
</template>
</Suspense>
</main>
<footer>
    <div>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'podcasts'}">Podcasts</router-link>
    <div class="menu-radio"><div class="circle"></div><router-link :to="{name: 'live'}">Live</router-link></div>

</div>
<div>
<p>Copyright &copy; Kevin Davis</p>
</div>
</footer>
</template>


<script setup>
import { RouterView, RouterLink } from "vue-router";

// import FeaturedMovie from "@/views/Home.vue"
</script>


