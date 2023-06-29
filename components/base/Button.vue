<template>
  <button
    class="text-lg text-center rounded-md hover:shadow-md hover:shadow-[#191828ff]/50 transition duration-300"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
}
</script>
