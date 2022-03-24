<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <!-- 登录框 -->
        <div class="sign-in-form">
          <h2 class="title">Easy Blog</h2>
          <div class="input-field">
            <input type="text" placeholder="Username" class="userInput" />
          </div>
          <div class="input-field">
            <input type="password" placeholder="Password" class="pswInput" />
          </div>
          <button class="btn" @click="Login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requests from "@/http/request.js"
export default {
  name: "Login",
  data() {
    return {
      username:"",
      password:""
    }
  },
  methods: {
    Login(){
      requests.post("/api/user/login",{
        "username":this.username,
        "password":this.password
      }).then(data=>{
        console.log(data);
      })
    }
  },
};
</script>

<style scoped>
body,
input {
  font-family: "Poppins", sans-serif;
}
.container {
  width: 100%;
  height: 100vh;
}
.forms-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    125deg,
    #ecfcff 0%,
    #ecfcff 40%,
    #b2fcff calc(40% + 1px),
    #b2fcff 60%,
    #5edfff calc(60% + 1px),
    #5edfff 72%,
    #3e64ff calc(72% + 1px),
    #3e64ff 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
.signin-signup {
  width: 800px;
  height: 400px;
  background-color: rgb(195, 230, 247);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 2.2rem;
  color: #444;
  margin: 10px 0 20px 65px;
}
.input-field {
  width: 300px;
  height: 55px;
  background-color: #f0f0f0;
  margin: 30px 0;
  border-radius: 55px;
  display: flex;
}
.input-field input {
  flex: 4;
  outline: none;
  padding-left: 15px;
  border: none;
  background: none;
  line-height: 1;
  font-weight: 700;
  font-size: 1.1rem;
  color: #333;
}
.input-field input::-webkit-input-placeholder {
  color: #aaa;
  font-weight: 500;
}
.input-field input::-moz-placeholder {
  color: #aaa;
  font-weight: 500;
}
.input-field input:-ms-input-placeholder {
  color: #aaa;
  font-weight: 500;
}
.input-field input::-ms-input-placeholder {
  color: #aaa;
  font-weight: 500;
}
.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}
.btn {
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #5995fd;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0 0 60px;
  transition: 0.6s;
}
.btn:hover {
  background-color: #4d84e2;
}
.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}
.social-media {
  display: flex;
  justify-content: center;
}
.social-icon {
  width: 46px;
  height: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  border-radius: 23px;
  transition: 0.3s;
}
.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}
</style>
