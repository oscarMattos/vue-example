<template>
  <div class="body p-2 bg-light">
    <!-- Slot Para Nombre del Componente -->
    <slot name="component-name"></slot>

    <finder-component @updateWeather="updateBodyWeather"></finder-component>
    <card-component :weatherprop="weather" :imageprop="cityPhotoUrl"></card-component>
  </div>
</template>
<script src="./body.js"></script>
<style src="./body.scss" lang="scss"></style>
