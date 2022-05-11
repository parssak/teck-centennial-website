<template>
  <Header
    title="Announcements"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <Container>
    <AnnouncementsCards />
    <nav
      class="
        py-3
        flex
        items-center
        justify-between
        border-t border-gray-200
        mt-6
        w-full
      "
      aria-label="Pagination"
    >
      <div class="hidden sm:block">
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">1</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">10</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">20</span>
          {{ " " }}
          results
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end space-x-2">
        <a href="#" class="btn btn-light btn-md"> Previous </a>
        <a href="#" class="btn btn-light btn-md"> Next </a>
      </div>
    </nav>
  </Container>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import BlogThreeColumnCards from "../../components/layouts/blog/BlogThreeColumnCards.vue";
import AnnouncementsCards from "../../components/app/AnnouncementsCards.vue";


export default {
  components: {
    Header,
    Container,
    BlogThreeColumnCards,
    AnnouncementsCards, 
},
};
</script>
