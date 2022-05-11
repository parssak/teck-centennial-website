<template>
  <Header
    title="Library Card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />
  <Container>
    <div>
      <h2 class="mb-6">Get a Library Card</h2>
      <h3 class="mb-2 text-2xl">Who Can Get A Library Card?</h3>
      <ArrowList :items="content" class="mb-6" />
      <h3 class="mb-2 text-2xl">
        How Much Does It Cost To Obtain A Library Card?
      </h3>
      <ArrowList :items="[content[0], content[1]]" class="mb-6" />
      <h3 class="mb-2 text-2xl">How Do I Obtain A Library Card?</h3>
      <ArrowList
        :items="[content[0], content[1], content[0], content[1]]"
        class="mb-6"
      />

      <SimpleStripedTable :headers="headers" :items="items" class="max-w-2xl mb-6" />
      <h3 class="mb-2 text-2xl">Visitor Cards</h3>
      <ArrowList :items="[content[0], content[1]]" class="mb-6" />
      <h3 class="mb-2 text-2xl">Online Library Card</h3>
      <p class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor risus
        vulputate velit ipsum, eu fringilla viverra. Nisi viverra mattis sed
        purus, tellus cras neque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor risus
        vulputate velit ipsum.
      </p>
    </div>
    <router-link class="btn btn-lg mt-4 btn-light" to="/contact">Send us an email</router-link>
  </Container>
</template>

<script>
import ArrowList from "../../../components/base/ArrowList.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import Button from "../../../components/base/Button.vue";
import { ArrowRightIcon } from "@heroicons/vue/solid";
import SimpleStripedTable from "../../../components/app/tables/SimpleStripedTable.vue";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
];

const items = [
  {
    type1: "Driver's License",
    type2: "Driver's License",
    type3: "Driver's License",
  },
  {
    type1: "Driver's License",
    type2: "Driver's License",
    type3: "Driver's License",
  },
  {
    type1: "Driver's License",
    type2: "Driver's License",
    type3: "Driver's License",
  },
];

const headers = [
  {
    label: "Type 1 (Government Issued)",
  },
  {
    label: "Type 2 (Name)",
  },
  {
    label: "Type 3 (Address)",
  },
];

export default {
  components: {
    Header,
    Container,
    ArrowList,
    Button,
    ArrowRightIcon,
    SimpleStripedTable,
  },
  data() {
    return {
      content,
      items,
      headers,
    };
  },
};
</script>
