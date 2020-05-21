export default {
  name: "card-component",
  data() {
    return {};
  },
  filters: {
    convertTimestamptoTime(value) {
      let result, unixTimestamp, dateObj, utcString, time;

      if (value === undefined) {
        result = value;
      } else {
        unixTimestamp = value;
        dateObj = new Date(unixTimestamp * 1000);
        utcString = dateObj.toUTCString();
        time = utcString.slice(-11, -4) + "h";
        result = time;
      }

      return result;
    },
    convertMphToKph(value) {
      let result, mphToKph, kph;

      if (value === undefined) {
        result = value;
      } else {
        mphToKph = value / 1000;
        kph = parseFloat(mphToKph).toFixed(2);
        result = kph + " kpm";
      }

      return result;
    },
    formatTemperature(value) {
      let result, str, strArray, temperature;

      if (value === undefined) {
        result = value;
      } else {
        str = value.toString();
        strArray = str.split(".");
        temperature =
          strArray[1] >= 50
            ? parseInt(strArray[0]) + 1
            : parseInt(strArray[0]) - 1;
        result = temperature + "º";
      }

      return result;
    },
    addPercentageSymbol(value) {
      let result;
      if (value === undefined) {
        result = value;
      } else {
        result = value + " %";
      }
      return result;
    },
  },
  methods: {},
  mounted() {},
  computed: {
    cityPhotoUrl() {
      return this.imageprop;
    },
    weather() {
      return this.weatherprop;
    },
  },
  props: ["weatherprop", "imageprop"],
};
