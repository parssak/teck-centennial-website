<template>
  <div class="relative">
    <div class="absolute inset-0">
      <img
        class="w-full left-0 md:w-1/2 md:left-1/2 absolute h-full object-cover"
        :src="imageSrc"
        alt=""
      />
    </div>

    <div></div>

    <div class="bg-accent absolute h-full left-0 w-3/5 hidden md:block">
      <img
        src="@/assets/icons/ellipse-1.svg"
        alt=""
        class="right-0 absolute inset-y-0 h-full transform translate-x-1/2"
      />
    </div>
    <Container>
      <div
        class="
          py-8
          bg-accent
          md:w-2/3 md:bg-transparent
          rounded-xl
          text-center
          md:text-left md:px-0
          px-2
        "
      >
        <h1
          class="
            text-4xl
            font-extrabold
            tracking-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          {{ title }}
        </h1>
        <p v-if="description" class="mt-6 text-lg text-white max-w-2xl">
          {{ description }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
export default {
  components: { Container },
  name: "Header",
  props: {
    title: String,
    description: String,
  },
  computed: {
    imageSrc() {
      const BASE_URL = "/teck-centennial-website/";
      const FOLDER_URL = BASE_URL + "banner/";
      switch (this.$route.path) {
        case "/about/overview":
          return FOLDER_URL + "about-overview.png";
        case "/about/staff":
          return FOLDER_URL + "about-staff.png";
        case "/about/policies":
          return FOLDER_URL + "about-policies.png";
        case "/about/donations":
          return FOLDER_URL + "about-donations.png";
        case "/services/eresources":
          return FOLDER_URL + "services-eresources.png";
        case "/services/library-card":
          return FOLDER_URL + "services-library-card.png";
        case "/programs/after-school":
          return FOLDER_URL + "programs-after-school.png";
        case "/programs/tdsrc":
          return FOLDER_URL + "programs-tdsrc.png";
        case "/programs/sponsors":
          return FOLDER_URL + "programs-sponsors.png";
        case "/announcements":
          return FOLDER_URL + "announcements.png";
        case "/contact":
          return FOLDER_URL + "contact.png";
        default:
          return FOLDER_URL + "about-overview.png";
      }
    },
  },
};
</script>
