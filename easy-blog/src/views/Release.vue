<template>
  <div class="main">
    <Header />
    <div class="container">
      <div class="newarticle">撰写新文章</div>
      <div class="title">
        <el-input placeholder="标题" v-model="input" clearable> </el-input>
      </div>
      <div class="articletext">
        <el-input
          id="textinput"
          type="textarea"
          :rows="14"
          placeholder="请输入文章内容"
          v-model="textarea"
          resize="none"
        >
        </el-input>
      </div>
      <div class="releasebtn">
        <el-button type="primary" round @click="realseArticle">发布文章</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../component/Header.vue";
import requests from "@/http/request.js"
export default {
  name: "Release",
  data() {
    return {
      input: "",
      textarea: "",
    };
  },
  methods: {
    realseArticle(){
      requests.post("/api/blog/new",{
        "title":this.input,
        "content":this.textarea
      }).then(res=>{
        if (res.errnum==0){
          alert("创建文章成功!!")
          this.$router.push("/home")
        }else{
           alert("创建文章失败!!");
        }
      })
    }
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.container {
  width: 800px;
  margin: 20px auto;
  position: relative;
}
.newarticle {
  font-weight: 700;
  font-size: 24px;
  margin: 20px 0;
}
.title {
  margin-bottom: 30px;
}
.articletext {
  margin-bottom: 30px;
}
.releasebtn {
  float: right;
}
</style>
