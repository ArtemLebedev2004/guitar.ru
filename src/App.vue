<template>
  <header>
    <NavBar />
  </header>

  <router-view/>

  <footer class="mt-12 px-3 py-10 bg-light-orange">
    <FooterSection />
  </footer>
</template>

<script setup>
import NavBar from './components/structure/NavBar.vue';
import FooterSection from './components/structure/FooterSection.vue';
</script>