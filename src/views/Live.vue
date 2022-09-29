<template>
    <div class="content">
      <sam-widget type="player" station-id="134720"
        token="6a57fa3594ef9a60ee3e24f0af066d71aa328ad5"
        anim-type='focus-in-contract' easing='ease-in-out-back' refresh-interval='30s'
        theme-border-radius='square' image-border-radius='square' theme='{"backgroundTop":"#505050ff","backgroundBottom":"#474747","widgetBorder":"#5f5f5f","dividers":"#5f5f5f","buttons":"#bebebe","text":"#bebebe"}'>
    </sam-widget>    
    </div>
    </template>
    
    
    
<script setup>
    import { RouterView, RouterLink } from "vue-router";
  
  const getMovie = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
  
  }
  
  await getMovie();
    </script>