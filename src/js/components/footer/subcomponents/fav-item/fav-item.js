export default {
  name: "fav-item",

  data() {
    return {
      hover: false,
    };
  },
  props: ["city"],

  methods: {
    deleteItem() {
      this.$root.favList = this.$root.favList.filter(
        (item) => item !== this.city
      );
    },
  },
};
