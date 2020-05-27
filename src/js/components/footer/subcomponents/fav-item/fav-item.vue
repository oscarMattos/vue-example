<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    style="display: flex; justify-content: center"
  >
    <h3 class="favItem trans-background">{{city}}</h3>
    <button v-if="hover" @click="deleteItem" class="trans-background">🗑</button>
  </div>
</template>

<script src="./fav-item.js"></script>
<style src="./fav-item.scss" lang="scss"></style>