<template>
  <HeaderComponent />
  <RouterView />
  <PracticeAreas />
  <FooterComponent />
</template>
<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import PracticeAreas from "./views/PracticeAreas.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style scoped></style>
