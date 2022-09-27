<template>
<div class="content about-c">
  <router-view v-slot="{ Component, route }">
    <transition :enter-active-class="route.meta.enterClass"
                :leave-active-class="route.meta.leaveClass"
                name="fade" mode="out-in">
        <component :is="Component" />
    </transition>
  </router-view>
  <section class="hero">
  <router-link :to="{name: 'marron'}">
  <div  class="hero-img-2 mb_parallax_container" id="mb_parallax_one">
    <h1 class="hero-img-h1"  data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">MARRØN</h1>
    <h2 class="hero-img-h2" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">September 3rd</h2>
  </div>
  </router-link>
  <router-link :to="{name: 'quelza'}">
  <div  class="hero-img-3 mb_parallax_container" id="mb_parallax_one">
    <h1 class="hero-img-h1" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">QUELZA</h1>
    <h2 class="hero-img-h2" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">August 2nd</h2>
  </div>
</router-link>
<router-link :to="{name: 'setoac'}">
  <div  class="hero-img-4 mb_parallax_container" id="mb_parallax_one">
    <h1 class="hero-img-h1" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">SETAOC MASS</h1>
    <h2 class="hero-img-h2" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">March 14th</h2>
  </div>
</router-link>
  <router-link :to="{name: 'vil'}">
  <div  class="hero-img-5 mb_parallax_container" id="mb_parallax_one">
    <h1 class="hero-img-h1" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">VIL</h1>
    <h2 class="hero-img-h2" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">February 1st</h2>
  </div>
</router-link>
  <h1  data-aos="fade-up" data-aos-duration="700"  data-aos-offset="500">LOVE PARADE - 1992</h1>
  <p>There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?
We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
</section>
</div>
</template>



<script setup>
  import { RouterView, RouterLink } from "vue-router";

const getMovie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1200));

}

await getMovie();
  </script>