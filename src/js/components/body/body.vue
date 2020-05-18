<template>
  <div class="body p-2 bg-light">
    <!-- Slot Para Nombre del Componente -->
    <slot name="component-name"></slot>

    <div class="search d-flex justify-content-center mt-2">
      <div class="d-flex w-25">
        <input
          type="text"
          v-model="city"
          class="border mr-2 w-50"
          v-on:keyup.enter="submitGetWeather"
        />
        <button
          class="btn btn-outline-primary ml-2 w-50"
          @click="submitGetWeather"
        >
          Consultar 
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-center pt-3 pb-2">
      <div class="card d-flex flex-column w-25 bg-white border shadow-sm">
        <!-- Card Top Section -->
        <div
          class="card-top d-flex flex-column"
          :class="[!cityPhotoUrl ? 'bg-gradient-dark' : '']"
          :style="[
            cityPhotoUrl
              ? {   
                  backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,.6) 0%, rgba(0,0,0,0) 30%), url(' + cityPhotoUrl + ')',
                  backgroundSize: 'cover',
                }
              : {}, 
          ]"
        >
          <div class="city-country d-flex justify-content-center pt-3 pb-2">
            <span class="mr-1 text-light">{{ weather.city }}</span>
            <span class="ml-1 text-light">{{ weather.country }}</span>
          </div>

          <div class="d-flex h-100">
            <div
              class="temperature d-flex align-items-start justify-content-end w-50 p-2"
            >
              <div>
                <h3 class="m-0 text-light">
                  {{ weather.temperature | formatTemperature }}
                </h3>
              </div>
            </div>

            <div
              class="extra-data d-flex flex-column align-items-left justify-content-start w-50 p-2"
            >
              <div>
                <p class="mb-1 text-light">{{ weather.state }}</p>
                <p class="mb-1 text-light">
                  {{ weather.windSpeed | convertMphToKph }}
                </p>
                <p class="m-0 text-light">
                  {{ weather.humidity | addPercentageSymbol }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Bottom Section -->
        <div class="card-bottom">
          <div class="collapsible-content-closed">
            <p>longitud: {{ weather.longitud }}</p>
            <p>latitud: {{ weather.latitud }}</p>
            <p>city: {{ weather.city }}</p>
            <p>country: {{ weather.country }}</p>
            <p>sunrise: {{ weather.sunrise | convertTimestamptoTime }}</p>
            <p>sunset: {{ weather.sunset | convertTimestamptoTime }}</p>
            <!-- <p>state: {{ weather.state }}</p>
            <p>description: {{ weather.description }}</p>
            <p>temperature: {{ weather.temperature }}</p>
            <p>thermalSensation: {{ weather.thermalSensation }}</p>
            <p>minimumTemperature: {{ weather.minimumTemperature }}</p>
            <p>maximumTemperature: {{ weather.maximunTemperature }}</p>
            <p>pressure: {{ weather.pressure }}</p>
            <p>humidity: {{ weather.humidity }}</p>
            <p>visibility: {{ weather.visibility }}</p>
            <p>windSpeed: {{ weather.windSpeed }}</p>
            <p class="m-0">windDeg: {{ weather.windDeg }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./body.js"></script>
<style src="./body.scss" lang="scss"></style>
