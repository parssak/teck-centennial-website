<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/base/Footer.vue";
import Nav from "@/components/nav/Nav.vue";

export default {
  components: { Nav, Footer },
};
</script>
