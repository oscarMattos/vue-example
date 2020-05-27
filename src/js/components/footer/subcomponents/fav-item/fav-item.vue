<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    style="display: flex; justify-content: center"
  >
    <h3 class="bg-transparent text-white font-weight-light">{{city}}</h3>
    <button v-if="hover" @click="deleteItem" class="bg-transparent border-0">🗑</button>
  </div>
</template>

<script src="./fav-item.js"></script>
<style src="./fav-item.scss" lang="scss"></style>