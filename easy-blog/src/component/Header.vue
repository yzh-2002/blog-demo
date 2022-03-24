<template>
  <div class="header">
      <div class="logo">Easy Blog</div>
      <el-input v-model="input" placeholder="搜索文章" id="input"></el-input>
      <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo"
      id="menu" 
      mode="horizontal" 
      @select="handleSelect"
      >
        <el-menu-item index="1">新建博客</el-menu-item>
        <el-menu-item index="4">登出</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name:"Header",
    data:()=>{
        return {
            activeIndex:"1",
            input:""
        }
    },
    methods:{
        // 点击跳转路由
        handleSelect(){

        }
    }
}
</script>

<style>
.header{
    position: relative;
    width: 100%;
    height: 60px;
    background-color: #6aeea1;
}
.logo{
    position: absolute;
    top: 50%;
    left: 5%;
    font-size: 20px;
    font-weight: bold;
    transform: translateY(-50%);
}
#input{
    position: absolute;
    top: 50%;
    right: 25%;
    transform: translateY(-20%);
    width: 10%;
}
#menu{
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    display: flex;
    justify-content: space-between;
    /* 取出底边 */
    border-bottom: 0px;
    background: #6aeea1;
}

</style>