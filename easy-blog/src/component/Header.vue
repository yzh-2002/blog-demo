<template>
  <div class="header">
    <div class="logo">Easy Blog</div>
    <el-input v-model="input" placeholder="搜索文章" id="input"></el-input>
    <el-button
      icon="el-icon-search"
      id="search"
      circle
      @click="searchArticle"
    ></el-button>
    <el-menu
      class="el-menu-demo"
      id="menu"
      mode="horizontal"
      text-color="#303133"
      @select="handleSelect"
    >
      <el-menu-item index="/home" id="nav">首页</el-menu-item>
      <el-menu-item index="/release" id="nav">新建博客</el-menu-item>
      <el-menu-item index="/login" id="nav">登出</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import requests from "@/http/request.js"
export default {
  name: "Header",
  data: () => {
    return {
      input: "",
    };
  },
  methods: {
    // 点击跳转路由
    handleSelect(key) {
      if (key.toString() != "/login") {
        this.$router.push({ path: key.toString() });
      }else{
         // 清除cookie（由于禁止js操作cookie，所以需要请求后端接口清楚redis中缓存的session）
         // 接口还没写....
        this.$router.push({path:key.toString()})
      }
    },
    searchArticle() {
      // 只需要跳转到带有keyword关键字的home页面即可
      this.$router.push({path:`/home/${this.input}`})
    },
  },
};
</script>

<style>
.header {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #409eff;
}
.logo {
  position: absolute;
  top: 50%;
  left: 5%;
  font-size: 26px;
  font-weight: 700;
  transform: translateY(-50%);
  font-family: serif;
}
#input {
  position: absolute;
  top: 50%;
  right: 25%;
  transform: translateY(-20%);
  width: 10%;
}
#search {
  position: absolute;
  top: 50%;
  right: 22.5%;
  transform: translateY(-50%);
}
#menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  display: flex;
  justify-content: space-between;
  /* 取出底边 */
  border-bottom: 0px;
  background: #409eff;
}
#nav{
   font-size: 20px;
  font-weight: 700;
   font-family: serif;
}
</style>