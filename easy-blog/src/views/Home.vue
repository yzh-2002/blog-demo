<template>
  <div class="home">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "@/component/Header.vue";
import Main from "@/component/Main.vue";
export default {
  name: "Home",
  components: {
    Header,
    Main,
  },
};
</script>

<style>
.home {
  height: 100%;
}
</style>