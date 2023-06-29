<template>
  <div class="w-full ">
    <!-- Hero section (text-lg)-->
    <section id="hero" class="w-full mt-24 pb-24 justify-between">
      <BaseSection>
        <div class="flex flex-col col-span-12 lg:col-span-6 mt-6 xl:mt-10 space-y-2 sm:space-y-3 px-2 sm:text-left min-h-full place-content-evenly">

          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="flex text-[2rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 sm:pl-8 xl:pr-5 text-yellow-100 mt-6"
          >
            DeFi's First BTC 
          </h1>
          <span data-aos="fade-right" data-aos-once="true" data-aos-delay="300" class="text-header-gradient text-[6rem] xl:text-6xl font-bold leading-tight capitalize sm:pr-8 sm:pl-8 xl:pr-5">0% interest loans</span>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
            class="flex flex-col sm:space-y-0 sm:pl-8 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full  w-4/12 px-4 py-2 bg-gradient-to-r from-[#f97871ff] to-[#c24524ff] text-lg text-yellow-100"
            >
              Enter App
            </BaseButton>
          </div>
          <div class="sm:space-x-4 capitalize">
            <p data-aos="fade-down" data-aos-once="true" data-aos-delay="700" class="paragraph uppercase font-semibold mt-40 text-yellow-100">
                <!--this is where total value title goes-->
            </p> 
          </div>
        </div>
        <div class="col-span-6 flex justify-center">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/bitcoinlogo.webp')"
              class="mt-4 "
              alt=""
            />
          </div>

      </BaseSection>
    </section>
    <!-- Getting started section -->
    <section class="relative max-w-full overflow-hidden mt-5 bg-[#f6f7e3] shadow-lg">
      <div class="w-full  pt-3 pb-8 flex flex-col px-48 ">
        <div
          data-aos="fade-up"
          class="w-full flex flex-col lg:flex-row space-y-12 justify-center lg:space-y-0 px-10 xl:px-5 sm:mt-3"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
        </div>
      </div>
    </section>

    <!-- Partners section -->
    <section class="relative max-w-full shadow verflow-hidden bg-[#373555ff]">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-4xl text-yellow-100 font-semibold">Trusted Partners</h3>
        <p data-aos="flip-down" class="paragraph text-yellow-100">Coming soon...</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <!--start here to add partner images <LandingPartnerImage
            v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']"
            :key="img"
            :img="img"
          />-->
        </div>
      </div>
    </section>
    <!-- FAQ section -->
    <section class="relative w-full py-24 shadow sm:rounded-2xl overflow-hidden content-center bg-[#373555ff]">
      <BaseSection class="bg-[#46418dff] rounded-md shadow-lg py-2">
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/faq.webp')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6 text-yellow-100">Frequently asked questions</h2>

          <ul class="shadow-box text-yellow-100">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      accordions: [
        {
          title: 'What is EMBR?',
          description:
            "Liquity is a decentralized borrowing protocol, where a user can deposit collateral in the form of BTC and draw a 0% interest loan against it. You will be given $ESC the USD stable token and must maintain a collateral ration (BTC > ESC taken) of 110% or more. These loans are secured not only by the collateral placed in the contract, they are also maintained by the Stability Pool feature containing ESC acting as guarantors of last resort in case of black swan events.",
        },
        {
          title: 'What is BTC.b?',
          description:
            "BTC.b is a newly launched wrapped version of Bitcoin on the Avalanche Network. BTC is moved to Avalanche via the Avalanche Bridge. BTC.b is an ideal candidate to bring true omnichain Bitcoin to all LayerZero supported chains. With BTC.b and the OFT standard, users can now securely transfer their BTC across chains without facing these compatibility challenges.",
        },
        {
          title: 'What is a OFT?',
          description:
            "The OFT standard allows for any fungible token to be securely transferred across chains without the need for middlechains or trusted validators. The OFT standard is built on top of LayerZero’s innovative omnichain messaging infrastructure and is not subject to the security vulnerabilities of existing bridging solutions. Essentially Layer Zero tech allows for true omnichain potential and interoperability.",
        },
        {
          title: 'How can I eaarn from EMBR?',
          description:
            "Users can deposit their $ESC into the Stability Pool and earn from liquidations & EMBR incentives. Also a user can stake their EMBR to earn revenue from the issuance fees(borrow fees represented in ESC) and redemption fees (represented as BTC.b)",
        },
      ],
      steps: [
        {
          img: 'bitcoinlogo.png',
          title: 'Deposit',
          description:
            'Deposit BTC.b as collateral and open a Trove. Receive ESC, a USD pegged asset, and use in all avenues of DeFi or beyond!',
        },
        {
          img: 'percenticon.png',
          title: 'Loan',
          description:
            '0$ interest loans means you have no obligations in paying back your loan, truly unlocking the potential of BTC and your capital.',
        },
        {
          img: 'esclogo.png',
          title: 'Enjoy',
          description:
            'Stake EMBR or ESC in the pools to earn from protocol generated fees and liquidations.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #fda48cff -6.01%, #f97871ff 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background-position: center;
  background-color: rgb(255, 255, 255);
}
.max-h-0 {
  max-height: 0;
}
</style>
