<template>
  <div class="favList">
    <button class="favItem trans-background" :key="i" v-for="(item,i) in this.favList">{{item}}</button>
  </div>
</template>

<script src="./fav-list.js"></script>
<style src="./fav-list.scss" lang="scss"></style>