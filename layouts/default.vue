<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <div
        class="absolute top-0 left-0 w-full h-4/6 sm:h-5/6 lg:h-4/6 cover-gradient-2 sm:cover-gradient"
      ></div>
      <BaseNavbar />

      <main class="text-black">
        <Nuxt />
      </main>

      <BaseFooter class="pt-4"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
.cover-gradient {
  background: #373555ff;
}
.cover-gradient-2 {
  background: linear-gradient(136.91deg, #373555ff , #46418dff 110%);
}
.bg-blue-gradient,
.text-gradient {
  background: linear-gradient(136.91deg, #fda48cff -12.5%, #f97871ff 107.5%);
}
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
