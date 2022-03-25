<template>
  <div class="main">
    <div class="banner">
      <div class="bannertext">Anything is Possible</div>
    </div>
    <div class="article-list">
      <template v-for="article in articleList">
        <div class="article" :key="article.title" @click="clickArticle">
          <div class="leftimg">
            <img
              src="https://cdn.jsdelivr.net/npm/typecho_joe_theme@4.3.5/assets/img/random/11.webp"
            />
          </div>
          <div class="info">
            <p class="title">{{ article.title }}</p>
            <p class="articleinfo">{{ article.content }}</p>
            <p class="author">author: {{ article.author }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import requests from "@/http/request.js";
export default {
  name: "Main",
  data() {
    return {
      // 假数据
      articleList: [
        {
          title: "MPLS学习",
          author: "yzh2002",
          content:
            "MPLS它的诞生：一开始IP转发依靠第三层封装的目的地址，依照最长匹配原则查询路由表的方式进行转发决策但是由于速度较慢，并且一旦遇到路由递归的情况就会拖延转发速度，很长一段时间成为制约网络速度的因素。这时MPLS就随之诞生，它的思想是在L2和L3之间插入一层MPLS标签，使得转发基于标签值而不是目的IP地址来进行转发但是值得注意的是：随着技术的进步，FIB快速转发的实现，ASIC芯片等硬件的提升，MPLS在路由查找速度上的优势也在不断削弱，但是这种架构思想却十分重要，并且其支持多层标签和转发平面面向连接的特性仍然有很多应用。MPLS相关术语LSR（Label Switch Router）：标签路由交换器，即支持MPLS的路由器，该类路由器可以根据MPLS标签头部对数据包进MPLS它的诞生：一开始IP转发依靠第三层封装的目的地址，依照最长匹配原则查询路由表的方式进行转发决策但是由于速度较慢，并且一旦遇到路由递归的情况就会拖延转发速度，很长一段时间成为制约网络速度的因素。这时MPLS就随之诞生，它的思想是在L2和L3之间插入一层MPLS标签，使得转发基于标签值而不是目的IP地址来进行转发但是值得注意的是：随着技术的进步，FIB快速转发的实现，ASIC芯片等硬件的提升，MPLS在路由查找速度上的优势也在不断削弱，但是这种架构思想却十分重要，并且其支持多层标签和转发平面面向连接的特性仍然有很多应用。MPLS相关术语LSR（Label Switch Router）：标签路由交换器，即支持MPLS的路由器，该类路由器可以根据MPLS标签头部对数据包进行转发MPLS域：即由一系列连续的LSR构成的一个MPLS域LER（Label Edge Router）：位于MPLS域边缘，连接其他网络的LSRLSP（Label Switch Path）:标签",
        },
        {
          title: "MPLS学习",
          author: "yzh2002",
          content:
            "MPLS它的诞生：一开始IP转发依靠第三层封装的目的地址，依照最长匹配原则查询路由表的方式进行转发决策但是由于速度较慢，并且一旦遇到路由递归的情况就会拖延转发速度，很长一段时间成为制约网络速度的因素。这时MPLS就随之诞生，它的思想是在L2和L3之间插入一层MPLS标签，使得转发基于标签值而不是目的IP地址来进行转发但是值得注意的是：随着技术的进步，FIB快速转发的实现，ASIC芯片等硬件的提升，MPLS在路由查找速度上的优势也在不断削弱，但是这种架构思想却十分重要，并且其支持多层标签和转发平面面向连接的特性仍然有很多应用。MPLS相关术语LSR（Label Switch Router）：标签路由交换器，即支持MPLS的路由器，该类路由器可以根据MPLS标签头部对数据包进MPLS它的诞生：一开始IP转发依靠第三层封装的目的地址，依照最长匹配原则查询路由表的方式进行转发决策但是由于速度较慢，并且一旦遇到路由递归的情况就会拖延转发速度，很长一段时间成为制约网络速度的因素。这时MPLS就随之诞生，它的思想是在L2和L3之间插入一层MPLS标签，使得转发基于标签值而不是目的IP地址来进行转发但是值得注意的是：随着技术的进步，FIB快速转发的实现，ASIC芯片等硬件的提升，MPLS在路由查找速度上的优势也在不断削弱，但是这种架构思想却十分重要，并且其支持多层标签和转发平面面向连接的特性仍然有很多应用。MPLS相关术语LSR（Label Switch Router）：标签路由交换器，即支持MPLS的路由器，该类路由器可以根据MPLS标签头部对数据包进行转发MPLS域：即由一系列连续的LSR构成的一个MPLS域LER（Label Edge Router）：位于MPLS域边缘，连接其他网络的LSRLSP（Label Switch Path）:标签",
        },
        {
          title: "MPLS学习",
          author: "yzh2002",
          content:
            "MPLS它的诞生：一开始IP转发依靠第三层封装的目的地址，依照最长匹配原则查询路由表的方式进行转发决策但是由于速度较慢，并且一旦遇到路由递归的情况就会拖延转发速度，很长一段时间成为制约网络速度的因素。这时MPLS就随之诞生，它的思想是在L2和L3之间插入一层MPLS标签，使得转发基于标签值而不是目的IP地址来进行转发但是值得注意的是：随着技术的进步，FIB快速转发的实现，ASIC芯片等硬件的提升，MPLS在路由查找速度上的优势也在不断削弱，但是这种架构思想却十分重要，并且其支持多层标签和转发平面面向连接的特性仍然有很多应用。MPLS相关术语LSR（Label Switch Router）：标签路由交换器，即支持MPLS的路由器，该类路由器可以根据MPLS标签头部对数据包进MPLS它的诞生：一开始IP转发依靠第三层封装的目的地址，依照最长匹配原则查询路由表的方式进行转发决策但是由于速度较慢，并且一旦遇到路由递归的情况就会拖延转发速度，很长一段时间成为制约网络速度的因素。这时MPLS就随之诞生，它的思想是在L2和L3之间插入一层MPLS标签，使得转发基于标签值而不是目的IP地址来进行转发但是值得注意的是：随着技术的进步，FIB快速转发的实现，ASIC芯片等硬件的提升，MPLS在路由查找速度上的优势也在不断削弱，但是这种架构思想却十分重要，并且其支持多层标签和转发平面面向连接的特性仍然有很多应用。MPLS相关术语LSR（Label Switch Router）：标签路由交换器，即支持MPLS的路由器，该类路由器可以根据MPLS标签头部对数据包进行转发MPLS域：即由一系列连续的LSR构成的一个MPLS域LER（Label Edge Router）：位于MPLS域边缘，连接其他网络的LSRLSP（Label Switch Path）:标签",
        },
      ],
    };
  },
  methods: {
    clickArticle() {
      this.$router.push({ path: "/detail" });
    },
  },
  created() {
    // 获取文章列表
    // requests.get("/api/blog/list").then((res) => {
    //   this.articleList = res.data;
    // });
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
.banner {
  width: 100%;
  height: 40%;
  overflow: hidden;
  background: url("../assets/banner.png") no-repeat center center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.bannertext {
  font-family: "SimSun";
  color: #fff;
  font-size: 80px;
  font-weight: 500;
}
.article-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
}
.article {
  width: 100%;
  height: 30vh;
  display: flex;
  background-color: #fff;
  box-shadow: 10px 10px 5px #888888;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 10vh;
}
.leftimg {
  height: 100%;
  flex: 1;
}
.leftimg > img {
  height: 100%;
  width: 100%;
}
.info {
  flex: 3;
  height: 100%;
  margin: 0 20px;
}
.info .title {
  font-weight: 500;
  font-size: 24px;
  margin: 20px 0;
}
.info .articleinfo {
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;
}
</style>