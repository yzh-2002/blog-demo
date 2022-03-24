<template>
  <div class="main">
    <div class="container">
      <div class="head">
        <div class="title">前端学习</div>
        <div class="info"></div>
      </div>
      <div class="article"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
.container {
  margin: 80px auto 0;
  width: 800px;
  height: 1000px;
  background-color: #fff;
}
.head {
  height: 300px;
  border-bottom: 1px solid #ccc;
  margin: 0 20px;
}
.head h1 {
  color: #303133;
}
</style>
