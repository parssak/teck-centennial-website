<template>
  <Header
    title="Staff & Board"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <Container>
    <h2 class="text-center font-semibold mb-12">Staff Members</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
      <div
        v-for="name in staffNames"
        :key="name"
        class="flex flex-col items-center justify-center flex-shrink-0"
      >
        <img
          src="@/assets/images/staff-lady.png"
          alt="Staff member"
          class="w-20 h-20 mb-4 rounded-full object-cover"
        />
        <h3 class="text-xl text-center text-accent mb-0">{{ name }}</h3>
        <p class="text-center">Position title</p>
      </div>
    </div>
  </Container>

  <Container class="bg-accent-lightest">
    <h2 class="text-center font-semibold mb-12">Board Members</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
      <div
        v-for="name in boardNames"
        :key="name"
        class="flex flex-col items-center justify-center flex-shrink-0"
      >
        <img
          src="@/assets/images/staff-lady.png"
          alt="Staff member"
          class="w-20 h-20 mb-4 rounded-full object-cover"
        />
        <h3 class="text-xl text-center text-accent mb-0">{{ name }}</h3>
        <p class="text-center">Position title</p>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const staffNames = [
  "Staff name",
  "Staff name",
  "Staff name",
  "Staff name",
  "Staff name",
  "Staff name",
];

const boardNames = [
  "Board Title",
  "Board Title",
  "Board Title",
  "Board Title",
  "Board Title",
  "Board Title",
];

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      staffNames,
      boardNames,
    };
  },
};
</script>
