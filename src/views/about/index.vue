<template>
  <Header
    title="Overview"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <!-- Split -->
  <Split
    title="Our Mission"
    description="Teck Centennial Public Library provides free access to information, ideas, resources, facilities, services and programs that enrich the lives and empower the citizens of Kirkland Lake."
    flip
  >
    <img src="@/assets/images/headphone-woman.png" alt="woman headphones" />
  </Split>

  <!-- Split -->
  <Split
    title="Our Vision"
    button="False"
    description="Teck Centennial Public Library aims to enrich, engage, and encourage all residents in their pursuit of life-long learning and cultural community development."
  >
    <img src="@/assets/images/group-read.png" alt="group reading" />
  </Split>

  <!-- Container -->
  <Container class="bg-accent-lightest">
    <h2 class="text-center">Our Values</h2>
    <div class="flex flex-wrap justify-evenly">
      <div
        v-for="value in values"
        :key="value"
        class="
          flex flex-col
          items-center
          lg:w-1/4
          justify-center
          p-4
          flex-shrink-0
        "
      >
        <img
          src="@/assets/icons/check-icon.svg"
          alt=""
          class="w-16 h-16 mb-4"
        />
        <h3 class="text-xl w-48 text-center">{{ value }}</h3>
      </div>
    </div>
  </Container>
</template>

<script>
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";

const values = [
  "Intellectual Freedom",
  "Literacy and Life-Long Learning",
  "Innovative and Excellent Service",
  "Respect and Integrity",
  "Community Relations",
  "Accountability",
  "Accountability",
];
const BASE_URL = "/teck-centennial-website/";
const announcements = [
  {
    title: "New Library Announcement",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    img: BASE_URL + "/images/woman-laptop.png",
    author: "Cindy Centennial",
    date: "Apr 7, 2022",
  },
  {
    title: "New Library Announcement",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    img: BASE_URL + "/images/woman-laptop.png",
    author: "Cindy Centennial",
    date: "Apr 7, 2022",
  },
  {
    title: "New Library Announcement",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    img: "/images/woman-laptop.png",
    author: "Cindy Centennial",
    date: "Apr 7, 2022",
  },
];

export default {
  components: {
    Header,
    Split,
    Container,
  },
  data() {
    return {
      values,
      announcements,
    };
  },
};
</script>
