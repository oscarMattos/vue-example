import FavItem from "../fav-item/fav-item.vue";

export default {
  name: "fav-list",

  components: { FavItem },

  computed: {
    favList() {
      return this.$root.favList;
    },
  },
};
