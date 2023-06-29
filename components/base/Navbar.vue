<template>
  <nav id="navbar" class="relative z-10 w-full text-yellow-100 text-lg">
    <div class="flex flex-col w-full px-8 mx-auto items-center lg:flex-row justify-between ">
      <div>
            <img :src="require('~/assets/img/logo/embr-with-text.svg')" class="w-24 xl:w-28 justify-start" alt="Embr Logo" />
      </div>
      <div class="flex flex-col lg:flex-row items-center  justify-center space-x-1 xl:space-x-4">
        <div class="w-full flex flex-row items-center py-3">

          <button class="rounded-md lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col lg:items-center pb-4 lg:pb-0  lg:pt-5 lg:justify-center lg:flex-row origin-top duration-300 xl:space-x-1 space-y-3 lg:space-y-0 "
        >
          <NavLink name="Docs" url="#" />
          <NavLink name="Features" url="#" />
          <NavLink name="Contact" url="#" />
          <li class="relative group">
            <button
              class="md:px-8 py-4 bg-transparent text-[#fefcdcff] hover:text-orange-500 focus:outline-none focus:shadow-outline flex items-center text-lg rounded-md"
              @click="dropdownToggler"
              @blur="dropdownToggler"
            >
              <span>More</span>
              <ChevronUpIcon v-if="dropdownNavbar" :size="16" />
              <ChevronDownIcon v-else :size="16" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownNavbar"
                class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-[#f97871ff] hover:bg-gray-100">Analytics</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-[#f97871ff] hover:bg-gray-100">Articles</a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <base-button class="px-8 xl:px-10 py-2 mt-2 bg-gradient-to-r from-[#f97871ff] to-[#c24524ff] text-white">
          Enter App
        </base-button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    }
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>
