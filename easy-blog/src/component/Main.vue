<template>
  <div class="main">
    <div class="banner">
      <div class="bannertext">Anything is Possible</div>
    </div>
    <div class="article-list">
      <template v-for="article in articleList">
        <div class="article" :key="article.title" @click="clickArticle(article.id)">
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
      // 文章列表
      articleList: [],
    };
  },
  methods: {
    clickArticle(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
  },
  watch:{
    $route(to,from){
      const keyword =to.params.keyword;
      if (keyword){
        requests.get(`/api/blog/list?keyword=${keyword}`).then(res=>{
            this.articleList =res.data;
      })
      }else{
        requests.get(`/api/blog/list`).then(res=>{
            this.articleList =res.data;
      })
      }
    }
  },
  created() {
     requests.get(`/api/blog/list`).then(res=>{
            this.articleList =res.data;
      })
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
  cursor: pointer;
}
.info .articleinfo {
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;
  cursor: pointer;
}
.author{
  cursor: pointer;
}
</style>