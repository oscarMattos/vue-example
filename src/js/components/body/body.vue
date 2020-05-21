<template>
  <div class="body p-2 bg-light">
    <!-- Slot Para Nombre del Componente -->
    <slot name="component-name"></slot>

    <finder-component @emitMessage="finderListenerEvent"></finder-component>
    <card-component
      :weather-data-value-from-body="weatherData"
      :city-photo-url-from-body="cityPhotoUrl"
    ></card-component>
  </div>
</template>
<script src="./body.js"></script>
<style src="./body.scss" lang="scss"></style>
