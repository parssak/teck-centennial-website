<template>
  <Header
    title="After School Program"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />
  <Container>
    <div class="space-y-8">
      <div class="flex flex-col md:flex-row md:items-center">
        <img
          class="
            object-cover object-center
            h-64
            md:h-auto md:w-64
            rounded-lg
            mb-8
            md:mr-8 md:mb-0
          "
          src="@/assets/images/woman-and-kid.png"
          alt="woman headphones"
        />
        <div>
          <h3>Upcoming Program</h3>
          <p class="mb-4">April 7, 2022</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            viverra feugiat elit sit lectus sed cras urna.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <a href="#" class="btn btn-xl btn-light mt-8">Learn More</a>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center">
        <img
          class="
            object-cover object-center
            h-64
            md:h-auto md:w-64
            rounded-lg
            mb-8
            md:mr-8 md:mb-0
          "
          src="@/assets/images/woman-and-kid.png"
          alt="woman headphones"
        />
        <div>
          <h3>Upcoming Program</h3>
          <p class="mb-4">April 7, 2022</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            viverra feugiat elit sit lectus sed cras urna.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <a href="#" class="btn btn-xl btn-light mt-8">Learn More</a>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Split from "../../../components/layouts/Split.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Split,
    Container,
  },
};
</script>
