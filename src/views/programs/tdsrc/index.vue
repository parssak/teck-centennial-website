<template>
  <Header
    title="TDSRC Information"
    description="Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Senectus molestie congue sit consectetur metus
  consectetur montes, amet."
  />
  <Container>
    <h2>What Is The TDSRC</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non sint
      inventore ex laboriosam aperiam cum debitis ipsam ipsa! Ab, error
      adipisci, unde, saepe illum vitae reiciendis delectus ipsam suscipit velit
      exercitationem sit veniam explicabo. Perspiciatis dignissimos dolores at
      mollitia!
    </p>
    <h3 class="mt-6">
      When Will I Know When To Pick Up My Child's Activity Bags?
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, omnis!
      Commodi soluta repellendus optio. Rem cumque dolore voluptatibus,
      inventore id assumenda amet perferendis nostrum! Praesentium id quod harum
      voluptatum tenetur.
    </p>
    <h3 class="mt-6">
      Where Can I Go For Information On How To Complete The Activities?
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, omnis!
      Commodi soluta repellendus optio. Rem cumque dolore voluptatibus,
      inventore id assumenda amet perferendis nostrum! Praesentium id quod harum
      voluptatum tenetur.
    </p>
    <a target="_blank" href="#" class="mt-8 btn btn-lg btn-light"
      >View The TDSRC Website</a
    >
  </Container>
  <Container class="bg-accent-lightest">
    <div class="text-center flex flex-col items-center">
      <h2>Past Events</h2>
      <div class="todo">add carousel</div>
    </div>
  </Container>
</template>

<script>
import Button from "../../../components/base/Button.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Container,
    Button,
  },
};
</script>
