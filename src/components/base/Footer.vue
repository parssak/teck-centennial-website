<template>
  <footer class="bg-accent text-white" aria-labelledby="footer-heading">
    <h2 class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 gap-6">
        <div class="grid lg:grid-cols-2 gap-6">
          <div>
            <h3 class="mb-2 footer-heading text-white">Hours Of Operation</h3>
            <div class="space-y-1">
              <div v-for="hour in hours" :key="hour.day" class="text-white">
                <span class="font-medium mr-1">{{ hour.day }}:</span>
                <span>{{ hour.hours }}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="mb-2 footer-heading">Quick Links</h3>
            <div class="space-y-1">
              <router-link
                v-for="link in quicklinks"
                :key="link.label"
                :to="link.path"
                class="block hover:text-accent-light"
              >
                {{ link.label }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-6">
          <div>
            <h3 class="mb-2 footer-heading text-white">Contact Us</h3>
            <address class="not-italic mb-4">
              Teck Centennial Public Library <br />
              10 Kirkland St E <br />
              Kirkland Lake, ON. P2N 1P1
            </address>
            <div class="space-y-2">
              <a
                href="mailto:library@tkl.ca"
                class="flex items-center hover:text-accent-light"
              >
                <MailIcon class="w-4 h-4 mr-2" />
                <span>library@tkl.ca</span>
              </a>
              <a
                href="tel:705-567-7966"
                class="flex items-center hover:text-accent-light"
              >
                <PhoneIcon class="w-4 h-4 mr-2" />
                <span>705-567-7966</span>
              </a>
              <a
                href="tel:705-567-7966"
                class="flex items-center hover:text-accent-light"
              >
                <PrinterIcon class="w-4 h-4 mr-2" />
                <span>705-567-7966</span>
              </a>
            </div>
          </div>
          <div>
            <h3 class="mb-2 footer-heading">Social Media</h3>
            <div class="flex items-center space-x-4">
              <a href="#" class="hover:text-accent-light">
                <img class="w-5 h-5" src="@/assets/icons/facebook.svg" alt="" />
              </a>
              <a href="#">
                <img class="w-5 h-5" src="@/assets/icons/instagram.svg" alt="" />
              </a>
              <a href="#">
                <img class="w-5 h-5" src="@/assets/icons/twitter.svg" alt="" />
              </a>
              <a href="#">
                <img class="w-5 h-5" src="@/assets/icons/youtube.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        mt-8
        border-t border-gray-200
        md:flex md:items-center md:justify-between
        bg-accent-dark
        w-full
      "
    >
      <div
        class="
          max-w-7xl
          mx-auto
          w-full
          px-4
          sm:px-6
          lg:px-8
          py-6
          flex flex-col
          md:flex-row
          items-center
          justify-between
        "
      >
        <span> Teck Centennial Public Library &copy; 2022 </span>
        <span class="flex items-center mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <div class="w-px h-4 mx-2 bg-white"></div>
          <a href="#">Terms &amp; Conditions</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation, hours } from "@/data";
import { MailIcon, PhoneIcon, PrinterIcon } from "@heroicons/vue/solid";

const quicklinks = [
  {
    label: "Announcements",
    path: "/announcements",
  },
  {
    label: "Online Catalouge",
    path: "#",
  },
  {
    label: "eResources",
    path: "/services",
  },
  {
    label: "Library Card",
    path: "/services/library-card",
  },
  {
    label: "Donations",
    path: "/about/donations",
  },
];

export default {
  components: {
    MailIcon,
    PhoneIcon,
    PrinterIcon,
  },

  setup() {
    return { navigation, hours, quicklinks };
  },
};
</script>
