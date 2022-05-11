<template>
  <Container :class="dark && 'bg-accent-dark'" class="sm:-my-4">
    <div class="grid gap-x-8 gap-y-12 lg:grid-cols-2">
      <section
        :class="flip && `lg:order-1`"
        class="lg:py-4 flex flex-col justify-center"
      >
        <h2 :class="dark && 'text-white'">{{ title }}</h2>
        <p :class="dark && 'text-white'">
          <span v-html="date"></span>
        </p>
        <p :class="dark && 'text-white'">
          <span class="mt-12" v-html="description"></span>
        </p>

        <slot name="extra-content"></slot>
      </section>
      <section>
        <div
          class="split-img-wrapper w-full h-full rounded-2xl overflow-hidden"
        >
          <slot></slot>
        </div>
      </section>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";

export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
