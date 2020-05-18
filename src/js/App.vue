<template>
  <div class="main d-flex-inline">
    <slot name="app-component"></slot>

    <header-component> 
      <!-- <template #component-name>
        <h class="h3 text-white m-0">
          Header Component
        </h2>
      </template> -->
      <template #title>
        <h2 class="text-white m-0">
          Weatherify
        </h2>
      </template>
    </header-component>

    <body-component>
      <!-- <template #component-name>
        <h2 class="h3 text-primary m-0">
          Body Component 
        </h2>
      </template> -->
    </body-component>

    <footer-component>
      <template #component-name>
        <h2 class="text-white m-0">
          Footer Component
        </h2>
      </template>
    </footer-component>

  </div>
</template>
<script>
import HeaderComponent from "./components/header/header.vue";
import BodyComponent from "./components/body/body.vue";
import FooterComponent from "./components/footer/footer.vue";

export default {
  name: "app",
  components: {
    //'header-component': () => import('./components/header/header.vue'), // import asincronico de forma local en el componente
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  },
};
</script>
