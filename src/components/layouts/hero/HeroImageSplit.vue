<template>
  <main class="lg:relative">
    <div class="absolute lg:w-1/2 h-full left-0 bg-accent"></div>
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-48 bg-accent">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <slot name="left-content"></slot>
      </div>
    </div>
    <div
      class="
        relative
        w-full
        h-64
        sm:h-72
        md:h-96
        lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full
      "
    >
      <slot name="right-content"></slot>
    </div>
  </main>
</template>
