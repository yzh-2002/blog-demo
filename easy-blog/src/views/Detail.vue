<template>
  <div class="main">
    <Header />
    <div class="container">
      <div class="head">
        <div class="title">{{article.title}}</div>
        <div class="info">
          <p>作者:{{article.author}}</p>
          <p>{{article.createtime}}</p>
        </div>
      </div>
      <div class="article">{{article.content}}</div>
    </div>
  </div>
</template>

<script>
import Header from "../component/Header.vue";
import requests from "@/http/request.js"
export default {
  name: "Detail",
  data() {
    return {
      article:{
        title:"",
        content:"",
        author:"",
        createtime:""
      }
    };
  },
  methods: {},
  components: {
    Header,
  },
  // 获取文章信息
  created(){
    const id =this.$route.params.id;
    requests.get(`/api/blog/detail?id=${id}`).then(res=>{
      this.article.title =res.data.title,
      this.article.content =res.data.content,
      this.article.author =res.data.author,
      this.article.createtime =new Date(res.data.createtime).Format("yyyy-MM-dd")
    })
  }
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
