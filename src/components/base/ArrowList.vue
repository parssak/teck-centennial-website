<template>
  <ul class="unstyled space-y-2">
    <li v-for="(item, index) in items" :key="index" class="flex items-start">
      <ArrowRightIcon class="mr-2 w-4 h-4 mt-1.5 flex-shrink-0 text-accent" />
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { ArrowRightIcon } from "@heroicons/vue/solid";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ArrowRightIcon,
  },
};
</script>
