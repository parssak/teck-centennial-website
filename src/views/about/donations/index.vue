<template>
  <Header
    title="Donations"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <Container>
    <h3>What Do You Need To Know?</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro enim
      laborum nam velit blanditiis.
    </p>
    <ArrowList :items="[...content, ...content]" class="mb-6 mt-2" />

    <h3>What Do We Accept?</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh egestas at
      nunc, sed. Justo venenatis, lorem enim at ut egestas:
    </p>
    <Container>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div
          v-for="(item, index) in icons"
          :key="index"
          class="flex flex-col items-center justify-center flex-shrink-0"
        >
          <img :src="item.image" :key="index" alt="" class="w-16 h-16 mb-4" />
          <h3 class="text-xl w- text-center">{{ item.title }}</h3>
        </div>
      </div>
    </Container>
    <h3>What Do We Not Accept?</h3>
    <ArrowList
      :items="[content[0], content[1], content[0], content[1], content[0]]"
      class="mb-6 mt-2"
    />
    <h3>What happens to Donated Materials?</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat
      a leo sit amet commodo. Ut ac tempus leo. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Aenean nibh
      libero, malesuada non semper id, tempus vitae turpis. Donec tristique
      elementum odio sit amet interdum. Quisque molestie metus sed auctor
      molestie.
    </p>
  </Container>
</template>

<script>
import ArrowList from "../../../components/base/ArrowList.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { ArrowRightIcon } from "@heroicons/vue/solid";

const content = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat a leo sit amet commodo. Ut ac tempus leo. Class aptent taciti sociosqu ad",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat a leo sit amet commodo. Ut ac tempus leo. Class aptent taciti sociosqu ad",
];

const BASE_URL = "/teck-centennial-website/";

const icons = [
  {
    title: "Books",
    image: BASE_URL + "/icons/Book.svg",
  },
  {
    title: "DVDs",
    image: BASE_URL + "/icons/DVD.svg",
  },
  {
    title: "CDs",
    image: BASE_URL + "/icons/CD.svg",
  },
  {
    title: "Magazines",
    image: BASE_URL + "/icons/Magazine.svg",
  },
];

const donations = ["Books", "DVDs", "CDs", "Magazines"];

export default {
  components: {
    Header,
    Container,
    ArrowList,
    ArrowRightIcon,
  },
  data() {
    return {
      content,
      donations,
      icons,
    };
  },
};
</script>
