<template>
  <div class="mt-0 d-flex flex-column justify-content-center align-items-center">
    <template v-for="(item,i) in this.favList">
      <fav-item :key="i" :city="item"></fav-item>
    </template>
  </div>
</template>

<script src="./fav-list.js"></script>
<style src="./fav-list.scss" lang="scss"></style>