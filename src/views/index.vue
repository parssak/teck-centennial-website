<template>
  <HeroImageSplit>
    <template v-slot:left-content>
      <div
        class="
          relative
          bg-accent
          text-center
          flex
          lg:block
          flex-col
          items-center
          lg:text-left
          mt-8
          lg:mt-0
        "
      >
        <h1 class="text-white max-w-xl">Teck Centennial Public Library</h1>
        <p class="max-w-md mt-6 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
          molestie congue sit consectetur metus consectetur montes, amet.
        </p>
        <div class="space-x-5">
          <router-link to="/contact" class="btn btn-xl btn-light mt-6"
            >Call to Action</router-link
          >
          <router-link to="/contact" class="btn btn-xl btn-outline mt-6"
            >Call to Action</router-link
          >
        </div>
      </div>
    </template>
    <template v-slot:right-content>
      <img
        src="@/assets/images/hero.png"
        alt=""
        class="w-full h-full object-cover"
      />
    </template>
  </HeroImageSplit>

  <Container>
    <div class="text-center">
      <h2 class="mb-4">New Arrivals</h2>
      <p class="max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
        molestie congue sit consectetur metus consectetur montes, amet.
      </p>
    </div>

    <div class="flex items-center mt-8">
      <button
        class="
          bg-accent-light
          hidden
          lg:grid
          place-items-center
          flex-shrink-0
          p-3
          rounded-full
          mr-6
          mb-8
        "
      >
        <ArrowLeftIcon class="w-6 h-6" />
      </button>
      <div class="grid grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
        <div class="hidden lg:block">
          <img
            src="@/assets/images/book.png"
            alt=""
            class="w-full object-contain mb-4"
          />
          <p class="font-bold">The Warsaw Orphan</p>
          <p>Hepworth, Sally</p>
        </div>
        <div class="hidden lg:block">
          <img
            src="@/assets/images/book.png"
            alt=""
            class="w-full object-contain mb-2"
          />
          <p class="font-bold">The Warsaw Orphan</p>
          <p>Hepworth, Sally</p>
        </div>
        <div>
          <img
            src="@/assets/images/book.png"
            alt=""
            class="w-full object-contain mb-2"
          />
          <p class="font-bold">The Warsaw Orphan</p>
          <p>Hepworth, Sally</p>
        </div>
        <div>
          <img
            src="@/assets/images/book.png"
            alt=""
            class="w-full object-contain mb-2"
          />
          <p class="font-bold">The Warsaw Orphan</p>
          <p>Hepworth, Sally</p>
        </div>
        <div>
          <img
            src="@/assets/images/book.png"
            alt=""
            class="w-full object-contain mb-2"
          />
          <p class="font-bold">The Warsaw Orphan</p>
          <p>Hepworth, Sally</p>
        </div>
      </div>
      <button
        class="
          bg-accent-light
          hidden
          lg:grid
          place-items-center
          flex-shrink-0
          p-3
          rounded-full
          ml-6
          mb-8
        "
      >
        <ArrowRightIcon class="w-6 h-6" />
      </button>
    </div>
  </Container>

  <Container class="bg-accent-lightest">
    <div class="grid md:grid-cols-3 gap-10">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center"
      >
        <img :src="item.img" alt="" class="mb-6 w-24" />
        <h3 class="mb-4">{{ item.title }}</h3>
        <p class="text-center max-w-lg">{{ item.description }}</p>
        <router-link :to="item.href" class="btn btn-lg mt-4 btn-light"
          >Learn More</router-link
        >
      </div>
    </div>
  </Container>

  <Container>
    <div class="text-center lg:text-left ">
      <h2>Announcements</h2>
      <p class="mb-12 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
        molestie congue sit consectetur metus consectetur.
      </p>
    </div>
    <AnnouncementsCards />
  </Container>
</template>

<script>
import HeroImageSplit from "../components/layouts/hero/HeroImageSplit.vue";
import HeroImageOverlay from "../components/layouts/hero/HeroImageOverlay.vue";
import Container from "../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import AnnouncementsCards from "../components/app/AnnouncementsCards.vue";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/outline";

const BASE_URL = "/teck-centennial-website/";
const items = [
  {
    title: "Library Card",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet.",
    img: BASE_URL + "card.svg",
    href: "/services/library-card",
  },
  {
    title: "Donations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet.",
    img: BASE_URL + "icons/Donations.svg",
    href: "/about/donations",
  },
  {
    title: "eResources",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet.",
    img: BASE_URL + "/icons/eResources.svg",
    href: "/services",
  },
];

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
    Container,
    HeroImageOverlay,
    AnnouncementsCards,
    HeroImageSplit,
    ArrowRightIcon,
    ArrowLeftIcon,
  },
  data() {
    return {
      items,
      announcements,
    };
  },
};
</script>
