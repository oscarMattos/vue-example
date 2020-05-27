import Vue from "vue";
import "bootstrap";

import App from "./App";
Vue.component("App", App);

var vueApp = function() {
  return new Vue({
    el: "#vueApp",
    data() {
      return {
        openWeatherApi: {
          baseUrl: "https://api.openweathermap.org/data/2.5/weather?q=",
          apiKey: "37358de45ae2ebaa59786c62beab3551",
          lang: "es",
          metric: "metric",
        },
        unsplashApi: {
          baseUrl: "https://api.unsplash.com/search/photos?query=",
          apiKey: "hLGz9TwCedPXvB8kJYbTL676YYVPq77O5uGHW5scs2w",
        },
        favList: [],
      };
    },
  });
};
vueApp();
