<template>
  <Header
    title="Sponsors"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <Container>
    <h2 class="text-center font-bold -mt-5">A Shoutout To Our 2022 Sponsors</h2>
    <p class="text-center px-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      egestas nunc ac volutpat efficitur. Integer scelerisque ipsum eros, sit
      amet auctor libero euismod at. Fusce facilisis eleifend laoreet. Cras
      imperdiet, purus eu lacinia pulvinar, velit purus vulputate eros, nec
      auctor mauris nunc at dolor. Quisque tristique purus in sem egestas
      rutrum. Donec commodo ipsum pulvinar turpis semper auctor. Curabitur sed.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="flex items-center"
      >
        <StarIcon class="w-4 h-4 mr-2 text-accent flex-shrink-0" />
        <span>
          {{ sponsor }}
        </span>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { StarIcon } from "@heroicons/vue/solid";

const sponsors = [
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
];

export default {
  components: {
    Header,
    Container,
    StarIcon,
  },
  data() {
    return {
      sponsors,
    };
  },
};
</script>
