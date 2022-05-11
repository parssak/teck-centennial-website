<template>
  <Header
    title="Policies"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <!-- Container -->
  <Container>
    <div class="grid gap-8 ml-8">
      <a
        href="#"
        v-for="value in values"
        :key="value"
        class="flex items-center"
      >
        <img src="@/assets/icons/document-icon.svg " alt="" />
        <h3 class="text-xl text-center mb-0 ml-4">{{ value }}</h3>
      </a>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const values = [
  "Mission Statement",
  "Vision Statement",
  "Statement of Value",
  "Intellectual Freedom",
  "Respect and Acknowledgement Declaration",
];

export default {
  components: {
    Header,
    Container,
  },

  data() {
    return {
      values,
    };
  },
};
</script>
