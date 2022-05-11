<template>
  <Header
    title="eResources"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <Container>
    <div class="text-center flex flex-col items-center">
      <h2 class="mb-3">Online eResources</h2>
      <p class="max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        asperiores nihil cupiditate maxime, at sunt.
      </p>
    </div>

    <div class="mt-8 grid gap-12 md:gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col items-center text-center"
      >
        <!-- <div
          class="h-36 w-full"
          v-for="(image, index) in items.image"
          :key="index"
        >
        </div> -->
        <div class="h-36 w-full grid place-items-center mb-4">
          <img :src="item.image" :key="index" class="object-contain max-w-xs" />
        </div>
        <h3 class="text-lg mb-1">{{ item.title }}</h3>
        <p class="text-sm max-w-sm">
          {{ item.description }}
        </p>
      </div>
    </div>
  </Container>
  <Container class="bg-accent-lightest">
    <div class="text-center flex flex-col items-center">
      <h2 class="mb-3">On-Site Resources</h2>
      <p class="max-w-md mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        asperiores nihil cupiditate maxime, at sunt.
      </p>
    </div>
    <div class="grid sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-evenly">
      <div
        v-for="resource in resources"
        :key="resource"
        class="
          flex flex-col
          items-center
          lg:w-1/4
          justify-center
          p-4
          flex-shrink-0
        "
      >
        <img :src="resource.image" alt="" class="w-16 h-16 mb-4" />
        <h3 class="text-xl w-48 mb-2 text-center">{{ resource.title }}</h3>
        <p class="text-sm text-center max-w-xs">
          {{ resource.description }}
        </p>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const BASE_URL = "/teck-centennial-website/";

const items = [
  {
    title: "Read or Listen with Libby",
    image: BASE_URL + "/images/Libby.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Auto Repair Source",
    image: BASE_URL + "/images/Auto-Repair-Source.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Small Engine Repair",
    image: BASE_URL + "/images/Small-Engine-Repair.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Hobbies and Crafts Reference Centre",
    image: BASE_URL + "/images/Hobbies-and-Crafts-Reference-Centre.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Home Improvement Reference Centre",
    image: BASE_URL + "/images/Home-Improvement-Reference-Centre.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Small Business Reference Centre",
    image: BASE_URL + "/images/Small-Business-Reference-Centre.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "EBSCO NoveList",
    image: BASE_URL + "/images/EBSCO.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "EBSCO Connect",
    image: BASE_URL + "/images/EBSCO.png",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
];

const resources = [
  {
    title: "InterLibrary Loan",
    image: BASE_URL + "/icons/Loan.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Mobile Services",
    image: BASE_URL + "/icons/Mobile.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Tech Support",
    image: BASE_URL + "/icons/Support.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Exam Proctoring",
    image: BASE_URL + "/icons/Proctor.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "1 Week Rentals",
    image: BASE_URL + "/icons/Rental.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Faxing",
    image: BASE_URL + "/icons/Fax.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Family History",
    image: BASE_URL + "/icons/Family.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Printing",
    image: BASE_URL + "/icons/Print.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Rent Our Board Room",
    image: BASE_URL + "/icons/board-room.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Laminating",
    image: BASE_URL + "/icons/Laminate.svg",

    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
];

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      items,
      resources,
    };
  },
};
</script>
