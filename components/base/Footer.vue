<template>
  <footer class="max-w-screen-xl px-8 mx-auto text-[#373555ff]">
    <div class = "grid grid-cols-12 gap-x-6 grid-rows-1 items-center justify-center space-y-2">
      <div class = "flex col-span-8">
        <a href="#">
          <img :src="require('~/assets/img/logo/embr-with-text.png')" class="-mt-2 my-6" alt="Embr Logo" />
        </a>
      </div>
      <div class ="flex col-span-4 justify-end items-center max-h-2 scale-75">
        <div class = "">
          <a href="#">
            <img :src="require('~/assets/img/twitter.png')" class="-mt-1 my-6 px-3 col-start-6 " alt="Twitter Logo" />
          </a> 
        </div>
        <div class = "">
          <a href="#">
            <img :src="require('~/assets/img/discord.png')" class="-mt-1 my-6 px-3 col-span-8" alt="discord Logo" />
          </a>
        </div>
        <div class = "">
          <a href="#">
            <img :src="require('~/assets/img/medium.png')" class="-mt-1 my-6 px-3 col-span-10" alt="medium Logo" />
          </a>
        </div>
      </div>
    </div>
    <div class="w-full border-y border-[#373555ff] text-[#373555ff]">
      <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div
          class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#f10000]"
        >

          <div class="sm:hidden flex sm:mb-0">

          </div>
          <ul class="space-y-1 text-[#373555ff]">
            <h3 class = "font-bold text-xl underline md:px-8">Learn</h3>
            <NavLink name="Documentation" url="#" />
            <NavLink name="FAQ" url="#" />
          </ul>
        </div>
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 xl:border-r border-[#373555ff]"
        >
          <ul class="space-y-1">
            <h3 class = "font-bold text-xl underline md:px-8 py-1">Use EMBR</h3>
            <NavLink name="Application" url="#" />
            <NavLink name="Metamask" url="#" />
          </ul>
        </div>
        <div
          class="md:w-full lg:w-full w-full xl:w-fit  sm:border-r-0 border-[#373555ff] flex col-span-2 items-center"
        >
          <a href="#">
            <img :src="require('~/assets/img/avax text.png')" class="-mt-1 my-6 px-3 h-10 flex flex-col justify-center" alt="medium Logo" />
          </a>        
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      &copy; Copyright to all of Defi
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
}
</script>
