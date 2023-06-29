<template>
  <div class="max-w-[200px] xl:max-w-[363px] mx-16 space-y-3 sm:space-y-3 text-center">
    <h3 class="text-[2em] text-[#373555ff] font-bold ">{{ step.title }}</h3>
    <img :src="require(`~/assets/img/getting-started/${step.img}`)" class="max-w-[200px] mx-auto  alt="/>

    <p class="text-sm/17 font-medium text-gray-700 leading-relaxed">
      {{ step.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'LandingStep',
  props: {
    step: {
      type: Object,
      required: true,
    },
  },
}
</script>
