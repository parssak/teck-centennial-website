<template>
  <Header
    title="Contact Us"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />
  <Container>
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <h3>Contact Information</h3>
        <address class="not-italic mb-4">
          Teck Centennial Public Library <br />
          10 Kirkland St E <br />
          Kirkland Lake, ON. P2N 1P1
        </address>
        <div class="space-y-2 text-base">
          <a
            href="mailto:library@tkl.ca"
            class="flex items-center hover:text-accent-light"
          >
            <MailIcon class="w-4 h-4 mr-2 text-accent-light" />
            <span>library@tkl.ca</span>
          </a>
          <a
            href="tel:705-567-7966"
            class="flex items-center hover:text-accent-light"
          >
            <PhoneIcon class="w-4 h-4 mr-2 text-accent-light" />
            <span>705-567-7966</span>
          </a>
          <a
            href="tel:705-567-7966"
            class="flex items-center hover:text-accent-light"
          >
            <PrinterIcon class="w-4 h-4 mr-2 text-accent-light" />
            <span>705-567-7966</span>
          </a>
        </div>
      </div>
      <div class="bg-accent-lightest p-8">
        <h3 class="mb-4">Hours Of Operation</h3>
        <div class="space-y-2">
          <div v-for="hour in hours" :key="hour.day">
            <span class="font-medium mr-1">{{ hour.day }}:</span>
            <span>{{ hour.hours }}</span>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <div class="h-96">
    <img
      src="@/assets/images/map.png"
      alt=""
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { hours } from "@/data";
import { MailIcon, PhoneIcon, PrinterIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Header,
    Container,
    MailIcon,
    PhoneIcon,
    PrinterIcon,
  },
  setup() {
    return { hours };
  },
};
</script>
