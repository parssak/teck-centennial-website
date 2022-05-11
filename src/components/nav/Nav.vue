<template>
  <Popover class="fixed left-0 w-full top-0 z-20 bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          lg:justify-start lg:space-x-5
        "
      >
        <div class="flex justify-start lg:w-0 flex-1">
          <router-link to="/">
            <span class="sr-only">Company Name</span>
            <div class="flex items-center">
              <img
                class="h-14 w-auto"
                src="@/assets/logo.svg"
                alt="Company Name"
              />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton
            class="
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-white
              hover:text-gray-500
              transition
              hover:bg-white
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6 text-accent" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex space-x-6 xl:space-x-7">
          <NavItem
            v-for="item in navigation"
            :path="item.path"
            :key="item.label"
            :dropdownItems="item.dropdownItems"
          >
            {{ item.label }}
          </NavItem>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          z-10
          p-2
          transition
          transform
          origin-top-right
          lg:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-gray-200
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <router-link to="/">
                <img
                  class="h-14 w-auto"
                  src="@/assets/logo.svg"
                  alt="Company name"
                />
              </router-link>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    transition
                    hover:bg-accent-lightest
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6 text-accent" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid">
                <PopoverButton>
                  <router-link to="/" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">Home</span>
                  </router-link>
                </PopoverButton>

                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="cursor-pointer">
                    <router-link
                      to="/about"
                      class="nav-item-mobile pointer-events-none flex"
                    >
                      <span class="nav-item-mobile__text">About</span>
                      <ChevronUpIcon
                        :class="open ? '' : 'transform rotate-180'"
                        class="w-5 h-5 text-accent ml-auto transition-all"
                      />
                    </router-link>
                  </DisclosureButton>
                  <DisclosurePanel class="ml-2 grid">
                    <PopoverButton
                      v-for="section in aboutSections"
                      :key="section.href"
                    >
                      <router-link :to="section.href" class="nav-item-mobile">
                        <span class="nav-item-mobile__text">{{
                          section.label
                        }}</span>
                      </router-link>
                    </PopoverButton>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="cursor-pointer">
                    <router-link
                      to="/services"
                      class="nav-item-mobile pointer-events-none flex"
                    >
                      <span class="nav-item-mobile__text">Services</span>
                      <ChevronUpIcon
                        :class="open ? '' : 'transform rotate-180'"
                        class="w-5 h-5 text-accent ml-auto transition-all"
                      />
                    </router-link>
                  </DisclosureButton>
                  <DisclosurePanel class="ml-2 grid">
                    <PopoverButton
                      v-for="section in servicesSections"
                      :key="section.href"
                    >
                      <router-link :to="section.href" class="nav-item-mobile">
                        <span class="nav-item-mobile__text">{{
                          section.label
                        }}</span>
                      </router-link>
                    </PopoverButton>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="cursor-pointer">
                    <router-link
                      to="/programs"
                      class="nav-item-mobile pointer-events-none flex"
                    >
                      <span class="nav-item-mobile__text"
                        >Children's Programs</span
                      >
                      <ChevronUpIcon
                        :class="open ? '' : 'transform rotate-180'"
                        class="w-5 h-5 text-accent ml-auto transition-all"
                      />
                    </router-link>
                  </DisclosureButton>
                  <DisclosurePanel class="ml-2 grid">
                    <PopoverButton
                      v-for="section in childrensProgramsSections"
                      :key="section.href"
                    >
                      <router-link :to="section.href" class="nav-item-mobile">
                        <span class="nav-item-mobile__text">{{
                          section.label
                        }}</span>
                      </router-link>
                    </PopoverButton>
                  </DisclosurePanel>
                </Disclosure>

                <PopoverButton>
                  <router-link to="/announcements/" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">Announcements</span>
                  </router-link>
                </PopoverButton>

                <PopoverButton>
                  <router-link to="/contact" class="nav-item-mobile">
                    <span class="nav-item-mobile__text">Contact</span>
                  </router-link>
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  <div class="nav-gap" />
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon, ChevronUpIcon } from "@heroicons/vue/outline";
import { navigation } from "@/data";

const aboutSections = [
  {
    href: "/about/overview",
    label: "Overview",
  },
  { href: "/about/policies", label: "policies" },
  { href: "/about/staff", label: "staff & board" },
  { href: "/about/donations", label: "donations" },
];

const servicesSections = [
  { href: "/services/eresources", label: "eResources" },
  { href: "/services/library-card", label: "library card" },
];

const childrensProgramsSections = [
  { href: "/programs/after-school", label: "After School Program" },
  { href: "/programs/tdsrc", label: "TDSRC Information" },
  { href: "/programs/sponsors", label: "Sponsors" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NavItem,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
  setup() {
    return {
      navigation,
      aboutSections,
      servicesSections,
      childrensProgramsSections,
    };
  },
};
</script>
