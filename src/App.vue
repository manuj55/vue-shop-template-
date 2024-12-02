<template>
  <div class="app-container">
    <Header />
    <div class="main_container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/nav/Footer.vue";
import Header from "./components/nav/Header.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main_container {
  flex: 1;
  /* Makes sure the main content fills available space */
  min-height: calc(100vh - 228px - 80px);
  /* Keeps the minimum height for main content */
}

footer {
  margin-top: auto;
  /* Ensures footer is at the bottom */
}
</style>
