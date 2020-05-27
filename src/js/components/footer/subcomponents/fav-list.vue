<template>
  <div style="margin-top: 10px">
    <h3 class="favItem" :key="i" v-for="(item,i) in this.favList">{{item}}</h3>
  </div>
</template>

<script src="./fav-list.js"></script>
<style src="./fav-list.scss" lang="scss"></style>