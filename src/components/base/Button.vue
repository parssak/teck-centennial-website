<template>
  <router-link :to="path" :class="getTheme()" class="btn no-show-active">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: false,
      default: "/",
    },
    theme: {
      type: String,
      default: "dark",
    },
    size: {
      type: String,
      default: "xl",
    },
  },
  methods: {
    getTheme() {
      let classList = "";
      switch (this.theme) {
        case "light":
          classList = "btn-light";
          break;
        case "dark":
          classList = "btn-dark";
          break;
        default:
          classList = "btn-dark";
      }

      switch (this.size) {
        case "xs":
          classList += " btn-xs";
          break;
        case "sm":
          classList += " btn-sm";
          break;
        case "md":
          classList += " btn-md";
          break;
        case "lg":
          classList += " btn-lg";
          break;
        case "xl":
          classList += " btn-xl";
          break;
        default:
          classList += " btn-md";
      }
      return classList;
    },
  },
};
</script>
