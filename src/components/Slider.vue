<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="slide in 5" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'start',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1.5,
        snapAlign: 'start',
      },
      // 1024 and up
      1024: {
        itemsToShow: 2.5,
        snapAlign: 'start',
      },
    },
  }),
});
</script>