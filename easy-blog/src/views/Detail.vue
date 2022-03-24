<template>
  <div class="main">
    <Header />
    <div class="container">
      <div class="head">
        <div class="title">前端学习</div>
        <div class="info">
          <p>作者: zyz</p>
          <p>2020-03-24</p>
        </div>
      </div>
      <div class="article"></div>
    </div>
  </div>
</template>

<script>
import Header from "../component/Header.vue";
export default {
  name: "Detail",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
.container {
  margin: 20px auto 0;
  width: 800px;
  height: 1000px;
  background-color: #fff;
}
.head {
  height: 200px;
  border-bottom: 1px solid #ccc;
  margin: 0 20px;
}
.head .title {
  height: 80px;
  color: #303133;
  font-size: 24px;
  text-align: center;
  line-height: 80px;
}
.head .info {
  height: 120px;
  padding-top: 20px;
}
.head .info p {
  margin-bottom: 10px;
}
.article {
  margin: 0 20px;
}
</style>
