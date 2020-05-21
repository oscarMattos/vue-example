<template>
  <div>
    <h2>Finder</h2>
    <div class="search d-flex justify-content-center mt-2">
      <div class="d-flex w-25">
        <input type="text" v-model="city" class="border mr-2 w-50" v-on:keyup.enter="emitMessage" />
        <button class="btn btn-outline-primary ml-2 w-50" @click="emitMessage">Consultar</button>
      </div>
    </div>
  </div>
</template>

<script src="./finder.js"></script>
<style src="./finder.scss" lang="scss"></style>