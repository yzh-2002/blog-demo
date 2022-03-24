<template>
  <div class="main">
      <div class="banner">
          <img src="@/assets/banner.png" alt="">
      </div>
      <div class="article-list">
          <template v-for="article in articleList">
              <div class="article" :key="article.title">
                  <div class="title">{{article.title}}</div>
                  <div class="author">{{article.author}}</div>
                  <div class="brief">{{article.brief}}</div>
              </div>
          </template>
      </div>
  </div>
</template>

<script>
import requests from "@/http/request.js"
export default {
    name:"Main",
    data(){
        return {
            // 假数据
            articleList:[]
        }
    },
    created(){
        // 获取文章列表
        requests.get("/api/blog/list").then(data=>{
            articleList =data
        })
    }
}
</script>

<style>
.main{
    width: 100%;
    height: 100%;
    position: relative;
}
.banner{
    width: 100%;
    height: 60%;
    position:relative;
    overflow:hidden;
}
.banner>img{
   position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    min-width: 100%;
    min-height: 100%;
    transform:translate(-50%,-50%);
}
.article-list {
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    border: 1px solid black;
}

</style>