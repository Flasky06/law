<template>
  <div class="bg-primary top-0 sticky z-40">
    <!-- <div
      class="hidden lg:flex lg:flex-row lg:justify-center lg:py-3 lg:space-x-24 bg-[#1E1E1E] text-white border-b-orange-500"
    >
      <div><span>Call Us</span><span>+254 712 345 678</span></div>

      <div><span>tw</span><span>ig</span><span>fb</span></div>
    </div> -->
    <div
      class="sub-header py-2 text-sm flex flex-col lg:flex-row lg:justify-around items-center bg-black"
    >
      <!-- Phone number section -->
      <div class="phone mb-2 lg:mb-0">
        <p class="text-center">
          Call us: <span class="text-yellow-600">(+254)719653260</span>
        </p>
      </div>
      <!-- Mail section -->
      <div class="mail flex items-center lg:ml-4">
        <p class="text-yellow-600 ml-1 lg:ml-2">info@companyname.com</p>
      </div>
      <!-- Social media icons section -->
      <section class="flex social-icons mt-2 lg:mt-0">
        <img
          class="w-10 mr-4"
          src="https://i.pinimg.com/564x/2f/b9/09/2fb909b74a854f0715e64dda5825990d.jpg"
          alt="Social Media Icon"
        />
        <img
          class="w-10 mr-4"
          src="https://i.pinimg.com/564x/2f/b9/09/2fb909b74a854f0715e64dda5825990d.jpg"
          alt="Social Media Icon"
        />
        <img
          class="w-10"
          src="https://i.pinimg.com/564x/2f/b9/09/2fb909b74a854f0715e64dda5825990d.jpg"
          alt="Social Media Icon"
        />
      </section>
    </div>
    <div class="border-t border-yellow-600"></div>
    <!-- End of sub header -->
    <!-- Desktop Navbar -->
    <div
      class="px-12 sm:px-6 hidden lg:flex justify-between lg:items-center lg:py-8 bg-secondary"
    >
      <router-link class="text-white text-4xl" to="/">
        LAW<span class="text-text_color">YER</span>
      </router-link>

      <ul class="space-x-16 lg:flex mr-20">
        <li>
          <router-link to="/" class="text-white hover:text-text_color"
            >HOME</router-link
          >
        </li>
        <li>
          <router-link
            to="/practice-area"
            @click="toggleMobileSidebar"
            class="text-white hover:text-text_color"
            >PRACTICE AREA</router-link
          >
        </li>
        <li>
          <router-link
            to="/attorneys"
            @click="toggleMobileSidebar"
            class="text-white hover:text-text_color"
          >
            ATTORNEYS
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact-us"
            @click="toggleMobileSidebar"
            class="text-white hover:text-text_color"
            >CONTACT US</router-link
          >
        </li>
      </ul>
    </div>

    <!-- Mobile Navbar (sidebar) -->
    <div
      class="lg:hidden fixed w-full h-20 z-[100] shadow-xl transition-transform ease-in-out duration-300 bg-slate-950"
    >
      <div class="max-w-7xl lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/">
            <span class="text-white text-xl ml-4"> Infospace</span>
          </router-link>
          <button
            @click="toggleMobileSidebar"
            class="text-white mr-2 text-2xl lg:hidden"
          >
            ☰
          </button>
        </div>
        <div name="slide " class="w-9/12 ml-auto left-0">
          <div
            v-if="mobileSidebarOpen"
            class="bg-[#061158] text-white mt-4 p-4 rounded-lg opacity-80 h-screen"
          >
            <div class="text-end mt-4 text-2xl">
              <button @click="toggleMobileSidebar" class="text-white">X</button>
            </div>
            <ul class="space-y-12 text-xl ml-4">
              <li>
                <router-link to="/" @click="toggleMobileSidebar">
                  Home</router-link
                >
              </li>
              <li>
                <router-link to="/practice-area" @click="toggleMobileSidebar">
                  About</router-link
                >
              </li>
              <li>
                <router-link to="/attorneys" @click="toggleMobileSidebar">
                  Services</router-link
                >
              </li>
              <li>
                <router-link to="/contact-us" @click="toggleMobileSidebar">
                  Portfolio</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const mobileSidebarOpen = ref(false);

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value;
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
