<template>
  <div class="favList">
    <template v-for="(item,i) in this.favList">
      <fav-item :key="i" :city="item"></fav-item>
    </template>
  </div>
</template>

<script src="./fav-list.js"></script>
<style src="./fav-list.scss" lang="scss"></style>