<template>
  <li class="w-full ">
    <a
      class="md:px-8 py-2 bg-transparent rounded-lg hover:text-orange-500 focus:outline-none focus:shadow-outline text-lg"
      :href="url"
    >
      {{ name }}
    </a>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
