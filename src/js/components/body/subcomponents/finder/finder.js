export default {
  name: "finder-component",
  data() {
    return { city: "", cityPhotoUrl: "", weatherData: {} };
  },
  methods: {
    emitMessage() {
      console.log("Emit Start");
      this.submitGetWeather();
      console.log("Valor nuevo foto: " + this.cityPhotoUrl);
      let objetoRetorno = {
        weatherData: this.weatherData,
        cityPhotoUrl: this.cityPhotoUrl,
      };
      this.$emit("emitMessage", objetoRetorno);
    },
    submitGetWeather() {
      let url;
      url = `${this.$root.openWeatherApi.baseUrl}${this.city}&appid=${this.$root.openWeatherApi.apiKey}&lang=${this.$root.openWeatherApi.lang}&units=${this.$root.openWeatherApi.metric}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((JSONdata) => {
          if (JSONdata.cod != "404") {
            this.weatherData = JSONdata;
            this.submitGetPhoto();
            document.querySelector(".collapsible-content-closed") != null
              ? this.toggleCollapse(".card-bottom > div")
              : "";
          } else {
            document.querySelector(".collapsible-content-opened") != null
              ? this.toggleCollapse(".card-bottom > div")
              : "";
            this.cityPhotoUrl = "";
            this.weatherData = {};
          }
        })
        .catch((error) => {
          document.querySelector(".collapsible-content-opened") != null
            ? this.toggleCollapse(".card-bottom > div")
            : "";
          console.error(`Error: ${error}`);
        });
    },
    submitGetPhoto() {
      let url, randomNum;
      url = `${this.$root.unsplashApi.baseUrl}${this.weather.city} landscape&orientation=portrait&page=1&client_id=${this.$root.unsplashApi.apiKey}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((JSONdata) => {
          if (JSONdata.results.length < 10) {
            randomNum = Math.floor(Math.random() * JSONdata.results.length);
          } else {
            randomNum = Math.floor(Math.random() * 10);
          }
          this.cityPhotoUrl = JSONdata.results[randomNum].urls["regular"] || "";
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    },
    toggleCollapse(cssSelector) {
      let selector;
      selector = document.querySelector(cssSelector);
      if (selector.classList.contains("collapsible-content-closed")) {
        selector.classList.remove("collapsible-content-closed");
        selector.classList.add("collapsible-content-opened", "p-3");
      } else {
        selector.classList.add("collapsible-content-closed");
        selector.classList.remove("collapsible-content-opened", "p-3");
      }
    },
  },
  mounted() {},
  computed: {
    weather() {
      let data;
      data = {};

      let {
        coord: { lon } = {},
        coord: { lat } = {},
        name: city,
        sys: { country } = {},
        sys: { sunrise } = {},
        sys: { sunset } = {},
        weather: [{ main } = {}] = [],
        weather: [{ description } = {}] = [],
        main: { temp } = {},
        main: { feels_like } = {},
        main: { temp_min } = {},
        main: { temp_max } = {},
        main: { pressure } = {},
        main: { humidity } = {},
        visibility: visibility,
        wind: { speed } = {},
        wind: { deg } = {},
      } = this.weatherData;

      data.longitud = lon;
      data.latitud = lat;
      data.city = city;
      data.sunrise = sunrise;
      data.sunset = sunset;
      data.country = country;
      data.state = main;
      data.description = description;
      data.temperature = temp;
      data.thermalSensation = feels_like;
      data.minimumTemperature = temp_min;
      data.maximunTemperature = temp_max;
      data.pressure = pressure;
      data.humidity = humidity;
      data.visibility = visibility;
      data.windSpeed = speed;
      data.windDeg = deg;

      return data;
    },
    weatherConditions() {
      let data, weather;
      data = [];

      weather = JSON.parse(JSON.stringify(WeatherConditions));

      let {
        weatherConditions: [
          cero,
          uno,
          dos,
          tres,
          cuatro,
          cinco,
          seis,
          siete,
          ocho,
        ] = [],
      } = weather;

      data[0] = cero;
      data[1] = uno;
      data[2] = dos;
      data[3] = tres;
      data[4] = cuatro;
      data[5] = cinco;
      data[6] = seis;
      data[7] = siete;
      data[8] = ocho;

      return data;
    },
    hasWeatherData() {
      let data;
      data = Object.keys(this.weatherData);
      return data.length;
    },
  },
};
