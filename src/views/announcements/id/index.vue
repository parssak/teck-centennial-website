<template>
  <BlogContent />
</template>

<script>
import BlogContent from '../../../components/layouts/blog/BlogContent.vue'
import Header from "../../../components/base/Header.vue";
import Container from "../../../components/layouts/Container.vue";

import { announcements } from "@/data";

export default {
  components: {
    Container,
    Header, BlogContent
  },
  data() {
    return {
      announcements,
      item: announcements.find((item) => item.id === this.$route.params.id),
    };
  },

  watch: {
    $route() {
      this.item = announcements.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
};
</script>
